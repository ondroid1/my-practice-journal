using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.DataAccess;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic.Services
{
    public class GoalService : IGoalService
    {
        private readonly IMapper _mapper;
        private readonly MyPracticeJournalContext _db;

        public GoalService(IMapper mapper, MyPracticeJournalContext db)
        {
            _mapper = mapper;
            _db = db;
        }

        public IEnumerable<GoalDto> GetGoals()
        {
            var goals = _db.Set<Goal>();
            return _mapper.Map<IEnumerable<GoalDto>>(goals);
        }

        public GoalDto GetGoal(int id)
        {
            var goal = _db.Goals.Find(id);
            var goalDto = _mapper.Map<GoalDto>(goal);
            return goalDto;
        }

        public void UpdateGoal(GoalDto goalDto)
        {
            var goal = _db.Goals.Find(goalDto.Id);
            _mapper.Map(goalDto, goal);
            _db.SaveChanges();
        }

        public Goal CreateGoal(GoalDto goalDto)
        {
            var newGoal = _mapper.Map<Goal>(goalDto);
            _db.Goals.Add(newGoal);
            _db.SaveChanges();
            return newGoal;
        }

        public void DeleteGoal(int id)
        {
            var goal = _db.Goals.Find(id);
            _db.Goals.Remove(goal);
            _db.SaveChanges();
        }
    }
}
