using System.Collections.Generic;

namespace MyPracticeJournal.DataAccess.Models
{
    public class Practice
    {
        public int Id { get; set; }

        public Goal Goal { get; set; }

        public int GoalId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string TutorialUrl { get; set; }

        public ICollection<Schedule> Schedules { get; set; }
    }
}
