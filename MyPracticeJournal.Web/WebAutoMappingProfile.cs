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
            CreateMap<PracticeDto, PracticeViewModel>();
                //.ForMember(x => x.MondayMinutes, opt => opt.Ignore())
                //.ForMember(x => x.TuesdayMinutes, opt => opt.Ignore())
                //.ForMember(x => x.WednesdayMinutes, opt => opt.Ignore())
                //.ForMember(x => x.ThursdayMinutes, opt => opt.Ignore())
                //.ForMember(x => x.FridayMinutes, opt => opt.Ignore())
                //.ForMember(x => x.SaturdayMinutes, opt => opt.Ignore())
                //.ForMember(x => x.SundayMinutes, opt => opt.Ignore());
        }
    }
}
