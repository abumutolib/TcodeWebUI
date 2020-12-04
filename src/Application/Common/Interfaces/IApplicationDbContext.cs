using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;

namespace Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Tutorial> Tutorials { get; set; }
        DbSet<Technology> Technologies { get; set; }
        DbSet<LanguageTool> LanguageTools { get; set; }
        DbSet<GroupTutorial> GroupTutorials { get; set; }
        DbSet<TutorialImage> TutorialImages { get; set; }
        DbSet<GroupLanguageTool> GroupLanguageTools { get; set; }

        DbSet<Article> Articles { get; set; }
        DbSet<ArticleImage> ArticleImages { get; set; }
        DbSet<Project> Projects { get; set; }

        DbSet<DataUser> DataUsers { get; set; }
        DbSet<Gender> Genders { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
