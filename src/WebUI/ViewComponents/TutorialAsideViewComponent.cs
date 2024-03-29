﻿using MediatR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Tutorials.Queries;

namespace WebUI.ViewComponents
{
    public class TutorialAsideViewComponent : ViewComponent
    {
        private readonly IMediator _mediator;

        public TutorialAsideViewComponent(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<IViewComponentResult> InvokeAsync(int langToolId)
        {
            var result = await _mediator.Send(new ViewComponentTutorialsQuery { LangToolId = langToolId });
            return View(result);
        }
    }
}
