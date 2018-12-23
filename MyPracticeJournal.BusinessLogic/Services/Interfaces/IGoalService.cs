using System;
using System.Collections.Generic;
using System.Text;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic.Services.Interfaces
{
    public interface IGoalService
    {
        IEnumerable<GoalDto> GetGoals();
        GoalDto GetGoal(int id);
        void UpdateGoal(GoalDto goalDto);
        Goal CreateGoal(GoalDto goalDto);
        void DeleteGoal(int id);
    }
}
