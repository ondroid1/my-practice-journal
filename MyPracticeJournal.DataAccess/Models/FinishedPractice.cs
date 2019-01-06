using System;

namespace MyPracticeJournal.DataAccess.Models
{
    public class FinishedPractice
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public int PracticeId { get; set; }
    }
}
