using System;
using System.Collections.Generic;
using AutoMapper;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Extensions;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.DataAccess;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic.Services
{
    public class MyWeekService : IMyWeekService
    {
        private readonly IMapper _mapper;
        private readonly MyPracticeJournalContext _db;

        public MyWeekService(IMapper mapper, MyPracticeJournalContext db)
        {
            _mapper = mapper;
            _db = db;
        }

        public MyWeekDto GetWeek(DateTime date)
        {
            var dateFrom = DateTime.Now.StartOfWeek(DayOfWeek.Monday);

            return new MyWeekDto
            {
                DateFrom = dateFrom,
                DateTo = dateFrom.AddDays(6)
            };
        }
    }
}
