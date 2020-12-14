using MediatR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.LanguageTools.Queries;

namespace WebUI.ViewComponents
{
    public class TutorialNavbarViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;

        public TutorialNavbarViewComponent(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync(int techId)
        {
            var result = await _mediator.Send(new ViewComponentLanguageToolsQuery { TechId = techId });
            return View(result);
        }
    }
}
