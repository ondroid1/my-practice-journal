
using System;
using System.Collections.Generic;

namespace MyPracticeJournal.BusinessLogic.DataTransferObjects
{
    public class MyWeekDto
    {
        public int Id { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public IList<MyDayDto> Days { get; set; }
    }
}
