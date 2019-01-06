using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MyPracticeJournal.DataAccess.Models
{
    public class DayResult
    {
        public int Id { get; set; }

        public DateTime date { get; set; }

        public int PracticeId { get; set; }
    }
}
