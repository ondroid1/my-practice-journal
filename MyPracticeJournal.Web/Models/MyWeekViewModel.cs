using System;
using System.Collections.Generic;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.Web.Models
{
    public class MyWeekViewModel
    {
        public DateTime DateFrom { get; set; }

        public DateTime DateTo { get; set; }

        public IList<MyDayDto> Days { get; set; }
    }
}
