using Microsoft.AspNetCore.Mvc;
using Milionaires.Service;

namespace Milionaires.Controllers
{
    public class QuestionController : Controller
    {
        private readonly IQuestionService _service;
        public QuestionController(IQuestionService service)
        {
            _service = service;
            _service.InitializeQuestions();
        }

        public IActionResult GetQuestions()
        {
            var _questions = _service.GetAll();

            return Json(_questions);
        }
    }
}
