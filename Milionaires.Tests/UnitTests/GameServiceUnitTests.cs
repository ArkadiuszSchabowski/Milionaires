using Milionaires.Models;
using Milionaires.Service;
using NUnit.Framework;

namespace Milionaires.Tests.UnitTests
{
    public class GameServiceUnitTests
    {
        private readonly IGameService _service;

        public GameServiceUnitTests(IGameService service)
        {
            _service = service;
        }
        [Test]
        public void CreateQuestions_WhenCalled_ShouldReturnListQuestion()
        {
            //act
            var result = _service.CreateQuestions();
            //assert
            Assert.That(result, Is.InstanceOf<List<Question>>());
        }

    }
}
