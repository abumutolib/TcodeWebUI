using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Tutorials.DTOs;
using Application.Tutorials.Queries;
using Application.LanguageTools.Queries;

namespace WebUI.Controllers
{
    public class TutorialsController : MvcController
    {
        public async Task<IActionResult> List(int techId, int toolId = 0)
        {
            var result = await Mediator.Send(new SelectedLangToolQuery { TechId = techId, LangToolId = toolId });
            return View(result);
        }

        [HttpGet]
        public async Task<DetailTutorialVm> Details(int id)
        {
            return await Mediator.Send(new DetailTutorialQuery { Id = id });
        }
    }
}
