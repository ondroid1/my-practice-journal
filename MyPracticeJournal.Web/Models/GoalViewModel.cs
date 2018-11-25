using System.ComponentModel.DataAnnotations;

namespace MyPracticeJournal.Web.Models
{
    public class GoalViewModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; }

        public string Description { get; set; }
    }
}
