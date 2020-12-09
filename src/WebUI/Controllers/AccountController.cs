using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity.UI.Services;
using WebUI.Models;
using Domain.Entities;
using Infrastructure.Identity;

namespace WebUI.Controllers
{
    public class AccountController : MvcController
    {
        private readonly IEmailSender _emailSender;
        private readonly IIdentityService _identityService;

        public AccountController(IEmailSender emailSender, IIdentityService identityService)
        {
            _emailSender = emailSender;
            _identityService = identityService;
        }

        [HttpGet]
        public async Task<IActionResult> Login(string returnUrl = null)
        {
            var model = new LoginVm();
            model.Scheme = new LoginScheme();
            if (!string.IsNullOrEmpty(model.Scheme.ErrorMessage))
                ModelState.AddModelError(string.Empty, model.Scheme.ErrorMessage);

            returnUrl = returnUrl ?? Url.Content("~/");

            // Clear the existing external cookie to ensure a claen login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            model.Scheme.ExternalLogins = (await _identityService.GetExternalAuthenticationSchemesAsync() as IEnumerable<AuthenticationScheme>).ToList();

            //if (ExternalLogins.Any())
            //    return Redirect(returnUrl);
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginVm model, string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");

            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _identityService.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    // _logger.LogInformation("User logged in.");
                    return LocalRedirect(returnUrl);
                }
                if (result.RequiresTwoFactor)
                {
                    return RedirectToPage("./LoginWith2fa", new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
                }
                if (result.IsLockedOut)
                {
                    //_logger.LogWarning("User account locked out.");
                    return RedirectToPage("./Lockout");
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return View();
                }
            }

            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterVm model, string returnUrl = null)
        {
            returnUrl = returnUrl ?? Url.Content("~/");
            //model.Scheme.ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
            if (ModelState.IsValid)
            {
                var user = new DataUser
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    MiddleName = model.MiddleName,
                    GenderId = 1
                };
                var result = await _identityService.CreateUserAsync(user, model.Email, model.Password);
                if (result.Result.Succeeded)
                {
                    //_logger.LogInformation("User created a new account with password.");

                    var code = await _identityService.GenerateEmailConfirmationTokenAsync(user.AppUser);
                    code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
                    var callbackUrl = Url.Page(
                        "/Account/ConfirmEmail",
                        pageHandler: null,
                        values: new { area = "Identity", userId = user.Id, code = code, returnUrl = returnUrl },
                        protocol: Request.Scheme);

                    await _emailSender.SendEmailAsync(model.Email, "Confirm your email",
                           $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>Clicking here</a>.");

                    if (_identityService.Options.SignIn.RequireConfirmedAccount)
                    {
                        return RedirectToPage("RegisterConfirmation", new { email = model.Email, returnUrl = returnUrl });
                    }
                    else
                    {
                        await _identityService.SignInAsync(user.AppUser, isPersistent: false);
                        return LocalRedirect(returnUrl);
                    }
                }
            }
            return View();
        }

        [HttpGet]
        public IActionResult Logout()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Logout(string returnUrl = null)
        {
            await _identityService.SignOutAsync();
            //_logger.LogInformation("User logged out.");

            returnUrl ??= Url.Action("~/");

            return LocalRedirect(returnUrl);
        }
    }
}
