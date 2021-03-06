﻿using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.DataAccess;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic.Services
{
    public class PracticeService : IPracticeService
    {
        private readonly IMapper _mapper;
        private readonly MyPracticeJournalContext _db;

        public PracticeService(IMapper mapper, MyPracticeJournalContext db)
        {
            _mapper = mapper;
            _db = db;
        }

        public IEnumerable<PracticeDto> GetPractices()
        {
            var practices = _db.Set<Practice>()
                .Include(practice => practice.Goal)
                .Include(practice => practice.Schedules);
            return _mapper.Map<IEnumerable<PracticeDto>>(practices);
        }

        public PracticeDto GetPractice(int id)
        {
            var practice = _db.Set<Practice>()
                .Include(p => p.Goal)
                .Include(p => p.Schedules)
                .First(x => x.Id == id);
            var practiceDto = _mapper.Map<PracticeDto>(practice);
            return practiceDto;
        }

        public void UpdatePractice(PracticeDto practiceDto)
        {
            // remove previously saved schedules
            var schedules = _db.Schedules.Where(x => x.PracticeId == practiceDto.Id);
            _db.Schedules.RemoveRange(schedules);

            // remove passed schedules with zero minutes
            practiceDto.Schedules = practiceDto.Schedules.Where(x => x.Minutes > 0);

            // save practice
            var practice = _db.Practices.Find(practiceDto.Id);

            _mapper.Map(practiceDto, practice);
            _db.SaveChanges();
        }

        public Practice CreatePractice(PracticeDto practiceDto)
        {
            var newPractice = _mapper.Map<Practice>(practiceDto);
            _db.Practices.Add(newPractice);
            _db.SaveChanges();
            return newPractice;
        }

        public void DeletePractice(int id)
        {
            var practice = _db.Practices.Find(id);
            _db.Practices.Remove(practice);
            _db.SaveChanges();
        }
    }
}
