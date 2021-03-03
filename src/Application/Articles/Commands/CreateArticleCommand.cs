using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Domain.Entities;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Application.Articles.DTOs;
using Application.Common.Interfaces;

namespace Application.Articles.Commands
{
    public class CreateArticleCommand : IRequest<int>
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public IList<ArticleImageDto> Images { get; set; }
        public string ImagePath { get; set; }
        public string ImageName { get; set; }
    }

    internal class CreateArticleCommandHandler : IRequestHandler<CreateArticleCommand, int>
    {
        private readonly IAppDbContext _context;

        public CreateArticleCommandHandler(IAppDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateArticleCommand request, CancellationToken cancellationToken)
        {
            List<ArticleImage> images = new();
            int returnId;

            if (request.Id != 0)
            {
                foreach (var img in request.Images)
                {
                    images.Add(new ArticleImage
                    {
                        Name = img.Name,
                        Path = img.Path
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
                returnId = article.Id;
            }
            else
            {
                var article = _context.Articles.Find(request.Id);

                article.Title = request.Title;
                article.HtmlContent = request.Content;

                images = await _context.ArticleImages
                                       .Where(x => x.ArticleId == article.Id && request.Images.Any(i => i.Name != x.Name))
                                       .ToListAsync(cancellationToken);

                foreach(var img in images)
                {
                    var reqImg = request.Images.FirstOrDefault(x => x.Id == img.Id);
                    img.Name = reqImg.Name;
                    img.Path = reqImg.Path;
                }

                returnId = article.Id;
            }
            await _context.SaveChangesAsync(cancellationToken);

            return returnId;
        }
    }
}
