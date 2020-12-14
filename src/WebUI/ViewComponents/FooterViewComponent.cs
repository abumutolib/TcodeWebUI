using MediatR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.LanguageTools.Queries;

namespace WebUI.ViewComponents
{
    public class FooterViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;

        public FooterViewComponent(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _mediator.Send(new GetLanguageToolsQuery());
            return View(result);
        }
    }
}
