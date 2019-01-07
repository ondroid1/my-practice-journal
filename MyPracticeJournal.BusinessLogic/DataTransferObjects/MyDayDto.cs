
using System;
using System.Collections.Generic;

namespace MyPracticeJournal.BusinessLogic.DataTransferObjects
{
    public class MyDayDto
    {
        public DayOfWeek DayOfWeek { get; set; }
        public IList<PracticeDto> Practices { get; set; }
        public IList<int> FinishedPractices { get; set; } = new List<int>();
    }
}
