using System;

namespace MyPracticeJournal.Web.Models
{
    public class FinishedPracticeViewModel
    {
        public int PracticeId { get; set; }

        public DateTime WeekFromDate { get; set; }

        public DayOfWeek DayOfWeek { get; set; }
    }
}
