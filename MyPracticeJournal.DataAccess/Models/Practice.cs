using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyPracticeJournal.DataAccess.Models
{
    public class Practice
    {
        public int Id { get; set; }

        public Goal Goal { get; set; }

        public int GoalId { get; set; }

        [MaxLength(200)]
        public string Name { get; set; }

        [MaxLength(1000)]
        public string Description { get; set; }

        [MaxLength(200)]
        public string TutorialUrl { get; set; }

        public ICollection<Schedule> Schedules { get; set; }
    }
}
