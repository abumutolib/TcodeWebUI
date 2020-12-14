using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class AppUser : IdentityUser
    {
        public virtual AppDataUser User { get; set; }
    }

    public class AppRole : IdentityRole { }
    public class AppUserRole : IdentityUserRole<string> { }
    public class AppUserClaim : IdentityUserClaim<string> { }
    public class AppRoleClaim : IdentityRoleClaim<string> { }
    public class AppUserLogin : IdentityUserLogin<string> { }
    public class AppUserToken : IdentityUserToken<string> { }
}
