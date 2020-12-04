using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class AppUser: IdentityUser
    {
        public virtual DataUser User { get; set; }
    }
}
