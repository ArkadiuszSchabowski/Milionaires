using Microsoft.EntityFrameworkCore;
using Milionaires.Database;
using Milionaires.Database.Entities;
using Milionaires.Exceptions;
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
        [Test]
        public void CreateRecord_WhenCalledWhenNameIsLongerThan25Letters_ShouldReturnBadRequestException()
        {
            var dto = new Score()
            {
                Id = 1,
                Name = "UserUserUserUserUserUserUserUser",
                Result = 2000,
            };

            Assert.Throws<BadRequestException>(() => _service.CreateRecord(dto));
        }
        [Test]
        public void CreateRecord_WhenResultIsIncorrect_ShouldReturnBadRequestException()
        {
            var dto = new Score()
            {
                Id = 1,
                Name = "User",
                Result = -1
            };
            Assert.Throws<BadRequestException>(() => _service.CreateRecord(dto));
        }
    }
}
