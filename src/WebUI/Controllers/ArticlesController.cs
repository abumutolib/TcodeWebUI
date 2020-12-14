using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebUI.Models;
using Application.Articles.Queries;
using Application.Articles.Commands;
using System.Collections.Generic;

namespace WebUI.Controllers
{
    [Authorize]
    public class ArticlesController : MvcController
    {
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> List([FromQuery] PaginOption pagin, [FromQuery] ArticleFilterVm filter)
        {
            if (!string.IsNullOrEmpty(filter.Title))
            {
                pagin.Page = 1;
                pagin.PageSize = 10;
            }
            var result = await Mediator.Send(new GetArticlesQuery
            {
                Title = filter.Title,
                Page = pagin.Page,
                PageSize = pagin.PageSize
            });
            return View(result);
        }

        [HttpGet]
        public IActionResult Create() => View();

        [HttpPost]
        public async Task<IActionResult> Create(CreateArticleCommand command)
        {
            await Mediator.Send(command);
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Details(int id)
        {
            return View(await Mediator.Send(new DetailsArticleQuery { Id = id }));
        }
    }
}
