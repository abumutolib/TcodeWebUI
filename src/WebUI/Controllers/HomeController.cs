using System.Diagnostics;
using System.Threading.Tasks;
using WebUI.Models;
using Microsoft.AspNetCore.Mvc;
using Application.LanguageTools.Queries;

namespace WebUI.Controllers
{
    public class HomeController : MvcController
    {
        public async Task<IActionResult> Index()
        {
            var result = await Mediator.Send(new GetLanguageToolsQuery());
            return View(result);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorVm { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
