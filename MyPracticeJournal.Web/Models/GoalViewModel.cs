using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MyPracticeJournal.Web.Models
{
    public class GoalViewModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; }

        [MaxLength(1000)]
        public string Description { get; set; }

        public IList<PracticeListViewModel> Practices { get; set; }
    }
}
