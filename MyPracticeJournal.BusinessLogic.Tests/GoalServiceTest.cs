using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services;
using MyPracticeJournal.DataAccess;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic.Tests
{
    [TestClass]
    public class GoalServiceTest
    {
        private static IMapper _mapper;
        private static IEnumerable<Goal> _goals;

        [ClassInitialize]
        public static void ClassInitialize(TestContext context)
        {
            // mock data initialization
            _goals = new[]
            {
                new Goal {Id = 1, Name = "One"},
                new Goal {Id = 2, Name = "Two"}
            };

            // automapper configuration
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new AutoMappingProfile());
            });
            _mapper = mappingConfig.CreateMapper();
        }

        [TestMethod]
        public void TestGetGoals()
        {
            var options = new DbContextOptionsBuilder<MyPracticeJournalContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;

            using (var db = new  MyPracticeJournalContext(options))
            {
                db.Goals.Add(new Goal { Name = "One" });
                db.Goals.Add(new Goal { Name = "Two" });
                db.Goals.Add(new Goal { Name = "Three" });
                db.SaveChanges();
            }

            // Use a clean instance of the context to run the test
            using (var context = new MyPracticeJournalContext(options))
            {
                var service = new GoalService(_mapper, context);
                var result = service.GetGoal(1);
                Assert.IsNotNull(result);
            }
        }

        [TestMethod]
        public void TestCreateGoal()
        {
            var options = new DbContextOptionsBuilder<MyPracticeJournalContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString()).Options;

            using (var db = new  MyPracticeJournalContext(options))
            {
                var goalService = new GoalService(_mapper, db);
                var goalDto = new GoalDto
                {
                    Name = "One",
                    Description = "Desc One"
                };
                goalService.CreateGoal(goalDto);
            }

            using (var db = new  MyPracticeJournalContext(options))
            {
                Assert.AreEqual(1, db.Goals.Count());
                Assert.AreEqual("One", db.Goals.Single().Name);
            }
        }
    }
}
