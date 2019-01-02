using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.Web.Models
{
    public class PracticeViewModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; }

        public string Description { get; set; }

        public GoalDto Goal { get; set; }

        public int GoalId { get; set; }

        public string TutorialUrl { get; set; }

        //public IEnumerable<ScheduleDto> Schedules { get; set; }
    }
}
