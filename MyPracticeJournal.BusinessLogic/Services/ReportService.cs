using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;

namespace MyPracticeJournal.BusinessLogic.Services
{
    public class ReportService : IReportService
    {
        public ReportDto GetReport(int year, int month)
        {
            return new ReportDto
            {
                Year = year,
                Month = month
            };
        }
    }
}
