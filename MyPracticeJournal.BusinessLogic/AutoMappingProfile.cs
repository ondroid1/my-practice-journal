﻿using AutoMapper;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.BusinessLogic
{
    public class AutoMappingProfile : Profile
    {
        public AutoMappingProfile()
        {
            CreateMap<Goal, GoalDto>();
            CreateMap<Practice, PracticeDto>();
            CreateMap<Schedule, ScheduleDto>();
        }
    }
}
