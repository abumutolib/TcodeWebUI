using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication;
using System.ComponentModel.DataAnnotations;

namespace WebUI.Models
{
    public class LoginVm
    {
        [Required]
        [EmailAddress(ErrorMessage = "Not valid email")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(5, ErrorMessage = "Minimum length 5")]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

        public LoginScheme Scheme { get; set; }
    }

    public class LoginScheme
    {
        [TempData]
        public string ErrorMessage { get; set; }
        public string ReturnUrl { get; set; }
        public IList<AuthenticationScheme> ExternalLogins { get; set; }
    }
}
