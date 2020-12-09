using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;
using Application.Common.Models;
using System.Security.Claims;
using System.Collections.Generic;

namespace Infrastructure.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public IdentityService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            Options = _userManager.Options;
        }

        public async Task<string> GetUserNameAsync(string userId)
        {
            var user = await _userManager.Users.FirstAsync(u => u.Id == userId);

            return user.UserName;
        }

        public async Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password)
        {
            var user = new AppUser
            {
                UserName = userName,
                Email = userName,
            };

            var result = await _userManager.CreateAsync(user, password);

            return (result.ToApplicationResult(), user.Id);
        }

        public async Task<(Result Result, string UserId)> CreateUserAsync(DataUser user, string userName, string password)
        {
            var appUser = new AppUser
            {
                User = user,
                Email = userName,
                UserName = userName
            };

            var result = await _userManager.CreateAsync(appUser, password);

            return (result.ToApplicationResult(), appUser.Id);
        }

        public async Task<string> GenerateEmailConfirmationTokenAsync(AppUser user)
        {
            return await _userManager.GenerateEmailConfirmationTokenAsync(user);
        }

        public async Task<Result> DeleteUserAsync(string userId)
        {
            var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

            if (user != null)
            {
                return await DeleteUserAsync(user);
            }

            return Result.Success();
        }

        public async Task<Result> DeleteUserAsync(AppUser user)
        {
            var result = await _userManager.DeleteAsync(user);

            return result.ToApplicationResult();
        }

        //Sign Manager Methods

        //Check user is signed or not
        public async Task<(bool Signed, AppUser User)> IsSignedIn(ClaimsPrincipal user)
        {
            if (_signInManager.IsSignedIn(user))
            {
                var appUser = await _userManager.GetUserAsync(user);
                return (true, appUser);
            }
            else
                return (false, null);
        }

        public async Task SignInAsync(AppUser user, bool isPersistent)
        {
            await _signInManager.SignInAsync(user, isPersistent);
        }

        //Sign out from system
        public async Task SignOutAsync()
        {
            await _signInManager.SignOutAsync();
        }

        //Sign in with user name and password for cookies sign in methods
        public async Task<SignInResult> PasswordSignInAsync(string username, string password, bool isPersistent, bool lockoutOnFailure)
        {
            return await _signInManager.PasswordSignInAsync(username, password, isPersistent, lockoutOnFailure);
        }

        //Get all external authentication shemes
        public async Task<IEnumerable<object>> GetExternalAuthenticationSchemesAsync()
        {
            return await _signInManager.GetExternalAuthenticationSchemesAsync();
        }

        public IdentityOptions Options { get; set; }
    }
}
