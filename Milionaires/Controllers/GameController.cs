using Microsoft.AspNetCore.Mvc;
using Milionaires.Database.Entities;
using Milionaires.Models;
using Milionaires.Service;

namespace Milionaires.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IGameService _service;
        public GameController(IGameService service)
        {
            _service = service;
        }

        [HttpGet("questions")]
        public IActionResult GetQuestions()
        {
            var _questions = _service.CreateQuestions();

            return Ok(_questions);
        }
        [HttpGet("scores")]
        public IActionResult GetScores([FromQuery] ScoreDto scoreDto)
        {
            ScoreQuery scores = _service.GetAllScores(scoreDto);

            return Ok(scores);
        }

        [HttpPost]
        public IActionResult SaveScore([FromBody] Score score)
        {
            _service.CreateRecord(score);
            return Ok("Wynik został zapisany!");
        }
    }
}