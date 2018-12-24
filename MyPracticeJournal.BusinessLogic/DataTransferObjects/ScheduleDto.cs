
namespace MyPracticeJournal.BusinessLogic.DataTransferObjects
{
    public class ScheduleDto
    {
        public int Id { get; set; }
        public int DayOfWeek { get; set; }
        public int Minutes { get; set; }
        public PracticeDto Practice { get; set; }
    }
}
