using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    public class TutorialsController : MvcController
    {
        public async Task<IActionResult> List()
        {
            return View();
        }
    }
}
