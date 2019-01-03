using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.Web.Controllers;

namespace MyPracticeJournal.Web.Tests
{
    [TestClass]
    public class GoalControllerTest
    {
        private static IMapper _mapper;
        private static IEnumerable<GoalDto> _goals;

        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            // mock data initialization
            _goals = new[]
            {
                new GoalDto {Id = 1, Name = "One"},
                new GoalDto {Id = 2, Name = "Two"}
            };

            // automapper configuration
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new WebAutoMappingProfile());
            });
            _mapper = mappingConfig.CreateMapper();
        }

        [TestMethod]
        public void TestGetGoalsViewData()
        {
            var goalServiceMock = new Mock<IGoalService>();
            goalServiceMock.Setup(x => x.GetGoals()).Returns(_goals);

            var controller = new GoalController(_mapper, goalServiceMock.Object);
            var goalViewModels = controller.Get().ToList();
            Assert.AreEqual(2, goalViewModels.Count);
            Assert.AreEqual("One", goalViewModels.First().Name);
        }

        [TestMethod]
        public void TestGetSingleGoalViewData()
        {
            var goalServiceMock = new Mock<IGoalService>();
            goalServiceMock.Setup(x => x.GetGoal(It.IsAny<int>()))
                .Returns((int par) => _goals.FirstOrDefault(y => y.Id == par));

            var controller = new GoalController(_mapper, goalServiceMock.Object);
            var goal = controller.Get(1);
            Assert.AreEqual("One", goal.Name);
        }
    }
}
