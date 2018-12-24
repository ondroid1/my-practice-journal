
using System.Collections.Generic;

namespace MyPracticeJournal.BusinessLogic.DataTransferObjects
{
    public class PracticeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public GoalDto Goal { get; set; }
        public int GoalId { get; set; }
        public IEnumerable<ScheduleDto> Schedules { get; set; }
    }
}
