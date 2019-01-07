using System.Collections.Generic;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.Web.Models
{
    public class ReportViewModel
    {
        public int Year { get; set; }

        public int Month { get; set; }

        public IList<ReportItemDto> ReportItems { get; set; }
    }
}
