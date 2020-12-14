using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Application.Common.Models;

namespace WebUI.ViewComponents
{
    public class PagerViewComponent : ViewComponent
    {
        public Task<IViewComponentResult> InvokeAsync(PagedResultBase result)
        {
            return Task.FromResult((IViewComponentResult)View("Pagination", result));
        }
    }
}
