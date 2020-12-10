using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities;
using Application.Common.Interfaces;
using System.Collections.Generic;

namespace Application.Articles.Commands
{
    public class CreateArticleCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public IList<(string name, string path)> Images { get; set; }
        public string ImagePath { get; set; }
        public string ImageName { get; set; }
    }
    public class CreateArticleCommandHandler : IRequestHandler<CreateArticleCommand, int>
    {
        private readonly IAppDbContext _context;

        public CreateArticleCommandHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateArticleCommand request, CancellationToken cancellationToken)
        {
            List<ArticleImage> images = new();

            foreach(var img in request.Images)
            {
                images.Add(new ArticleImage
                {
                    Name = img.name,
                    Path = img.path
                });
            }

            var article = new Article
            {
                Title = request.Title,
                HtmlContent = request.Content,
                IsActive = false,
                Images = images
            };

            _context.Articles.Add(article);
            await _context.SaveChangesAsync(cancellationToken);

            return article.Id;
        }
    }
}
