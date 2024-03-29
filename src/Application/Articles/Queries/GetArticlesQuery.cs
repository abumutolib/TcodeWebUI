﻿using MediatR;
using AutoMapper;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper.QueryableExtensions;
using Domain.Entities;
using Application.Articles.DTOs;
using Application.Common.Models;
using Application.Common.Interfaces;
using Application.Common.Pagination;

namespace Application.Articles.Queries
{
    public class GetArticlesQuery : IRequest<PagedResult<ArticleListDto>>
    {
        public string Title { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
    internal class GetArticlesQueryHandler : IRequestHandler<GetArticlesQuery, PagedResult<ArticleListDto>>
    {
        private readonly IMapper _mapper;
        private readonly IAppDbContext _context;

        public GetArticlesQueryHandler(IAppDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<PagedResult<ArticleListDto>> Handle(GetArticlesQuery request, CancellationToken cancellationToken)
        {
            PagedResult<ArticleListDto> result = new();
            IQueryable<Article> articles = _context.Articles;
            if (!articles.Any())
                return result;

            if (!string.IsNullOrEmpty(request.Title) && request.Title.Length >= 3)
                articles = articles.Where(x => x.Title.ToLower().Contains(request.Title.ToLower()));

            result = await articles.OrderByDescending(x => x.Created)
                                                               .ProjectTo<ArticleListDto>(_mapper.ConfigurationProvider)
                                                               .GetPagedAsync(request.Page, request.PageSize, cancellationToken);
            return result;
        }
    }
}
