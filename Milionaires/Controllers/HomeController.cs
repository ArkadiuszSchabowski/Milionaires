using Microsoft.AspNetCore.Mvc;

namespace Milionaires.Controllers
{
    public class HomeController : Controller
    {

        public HomeController()
        {

        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Scores()
        {
            return View();
        }
    }
}

