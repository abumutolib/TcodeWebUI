using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace WebUI.Controllers
{
    [Authorize]
    public class ArticlesController : MvcController
    {
        public async Task<IActionResult> List()
        {
            return View();
        }
    }
}
