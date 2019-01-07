using System;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.BusinessLogic.Services.Interfaces
{
    public interface IReportService
    {
        ReportDto GetReport(int year, int month);
    }
}
