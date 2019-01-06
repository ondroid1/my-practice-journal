using System;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.BusinessLogic.Services.Interfaces
{
    public interface IMyWeekService
    {
        MyWeekDto GetWeek(DateTime date);
    }
}
