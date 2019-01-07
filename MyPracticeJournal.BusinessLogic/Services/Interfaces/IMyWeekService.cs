using System;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.BusinessLogic.Services.Interfaces
{
    public interface IMyWeekService
    {
        MyWeekDto GetWeek(DateTime date);
        void UpdateFinishedPractice(int practiceId, DateTime weekFromDate, DayOfWeek dayOfWeek);
    }
}
