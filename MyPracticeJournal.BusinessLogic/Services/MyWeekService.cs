using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
            var dateFrom = date.StartOfWeek(DayOfWeek.Monday);

            var schedules = _db.Set<Schedule>()
                .Include(schedule => schedule.Practice)
                .Include(schedule => schedule.Practice.Goal);

            var scheduleDtos = _mapper.Map<IEnumerable<ScheduleDto>>(schedules);

            var days = new List<MyDayDto>();

            foreach (var scheduleDto in scheduleDtos)
            {
                var day = days.FirstOrDefault(x => x.DayOfWeek == scheduleDto.DayOfWeek);

                if (day == null)
                {
                    day = new MyDayDto
                    {
                        DayOfWeek = scheduleDto.DayOfWeek,
                        Practices = new List<PracticeDto>(),
                    };
                    days.Add(day);
                }

                day.Practices.Add(scheduleDto.Practice);
            }

            return new MyWeekDto
            {
                DateFrom = dateFrom,
                DateTo = dateFrom.AddDays(6),
                Days = days
            };
        }

        public void UpdateFinishedPractice(int practiceId, DateTime weekFromDate, DayOfWeek dayOfWeek)
        {
            // calculate practice date
            var practiceDate = dayOfWeek == DayOfWeek.Sunday
                ? weekFromDate.AddDays(6)
                : weekFromDate.AddDays((int) dayOfWeek - 1);

            // update db
            var finishedPractice = _db.FinishedPractices
                .FirstOrDefault(x => x.PracticeId == practiceId && x.Date == practiceDate);

            if (finishedPractice == null)
            {
                _db.FinishedPractices.Add(new FinishedPractice
                {
                    Date = practiceDate,
                    PracticeId = practiceId,
                });
            }
            else
            {
                _db.FinishedPractices.Remove(finishedPractice);
            }

            _db.SaveChanges();
        }
    }
}
