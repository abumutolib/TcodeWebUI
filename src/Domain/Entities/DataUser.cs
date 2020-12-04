using System.Collections.Generic;

namespace Domain.Entities
{
    public class DataUser
    {
        public int Id { get; set; }
        public int GenderId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string AppUserId { get; set; }

        public virtual Gender Gender { get; set; }
        public virtual AppUser AppUser { get; set; }

        public virtual ICollection<Article> Articles { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
    }
}
