
using System.Collections.Generic;

namespace MyPracticeJournal.BusinessLogic.DataTransferObjects
{
    public class GoalDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<PracticeDto> Practices { get; set; }
    }
}
