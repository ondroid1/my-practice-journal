using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.Web.Models
{
    public class PracticeListViewModel
    {
        public IList<PracticeViewModel> PracticeList { get; set; }

        public IList<GoalViewModel> GoalList { get; set; }
    }
}
