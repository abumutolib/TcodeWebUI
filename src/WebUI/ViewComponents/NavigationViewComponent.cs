using MediatR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Technologies.Queries;

namespace WebUI.ViewComponents
{
    public class NavigationViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;

        public NavigationViewComponent(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await _mediator.Send(new GetTechologiesQuery());
            return View(result);
        }
    }
}
