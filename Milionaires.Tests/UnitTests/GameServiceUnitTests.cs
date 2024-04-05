using Microsoft.EntityFrameworkCore;
using Milionaires.Database;
using Milionaires.Models;
using Milionaires.Service;
using Milionaires.Tests.Fakes;
using Moq;
using NUnit.Framework;

namespace Milionaires.Tests.UnitTests
{
    public class GameServiceUnitTests
    {
        private IGameService _service;

        [SetUp]
        public void Setup()
        {
            var options = new DbContextOptionsBuilder<MyDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase").Options;

            var mockContext = new Mock<FakeDbContext>(options);

            _service = new GameService(mockContext.Object);
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
