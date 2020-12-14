using System.Threading.Tasks;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Domain.Entities;
using Application.Common.Models;

namespace Infrastructure.Identity
{
    public interface IIdentityService
    {
        IdentityOptions Options { get; set; }

        Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password);
        Task<(Result Result, string UserId)> CreateUserAsync(AppDataUser user, string userName, string password);
        Task<Result> DeleteUserAsync(string userId);
        Task<Result> DeleteUserAsync(AppUser user);
        Task<string> GenerateEmailConfirmationTokenAsync(AppUser user);
        Task<IEnumerable<object>> GetExternalAuthenticationSchemesAsync();
        Task<string> GetUserNameAsync(string userId);
        Task<(bool Signed, AppUser User)> IsSignedIn(ClaimsPrincipal user);
        Task<SignInResult> PasswordSignInAsync(string username, string password, bool isPersistent, bool lockoutOnFailure);
        Task SignInAsync(AppUser user, bool isPersistent);
        Task SignOutAsync();
    }
}
