using AutoMapper;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.Web.Models;

namespace MyPracticeJournal.Web
{
    public class WebAutoMappingProfile : Profile
    {
        public WebAutoMappingProfile()
        {
            CreateMap<GoalDto, GoalViewModel>();
        }
    }
}
