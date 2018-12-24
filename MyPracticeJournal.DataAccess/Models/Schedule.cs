using System;
using System.Collections.Generic;
using System.Text;

namespace MyPracticeJournal.DataAccess.Models
{
    public class Schedule
    {
        public int Id { get; set; }

        public int DayOfWeek { get; set; }

        public int Minutes { get; set; }

        public Practice Practice { get; set; }

        public int PracticeId { get; set; }
    }
}
