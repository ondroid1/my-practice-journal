using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.DataAccess;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic.Services
{
    public class ReportService : IReportService
    {
        private readonly IMapper _mapper;
        private readonly MyPracticeJournalContext _db;

        public ReportService(IMapper mapper, MyPracticeJournalContext db)
        {
            _mapper = mapper;
            _db = db;
        }

        public ReportDto GetReport(int year, int month)
        {
            var finishedPractices = _db.Set<FinishedPractice>()
                .Include(fp => fp.Practice)
                .Include(fp => fp.Practice.Goal);

            var reportItems = finishedPractices
                .Where(x => x.Date.Year == year && x.Date.Month == month)
                .GroupBy(x => x.PracticeId)
                .Select(x => new ReportItemDto
                {
                    GoalName = x.First().Practice.Goal.Name,
                    PracticeName = x.First().Practice.Name,
                    FinishedMinutes = x.Sum(y => y.Minutes)
                }).ToList();

            return new ReportDto
            {
                Year = year,
                Month = month,
                ReportItems = reportItems
            };
        }
    }
}
