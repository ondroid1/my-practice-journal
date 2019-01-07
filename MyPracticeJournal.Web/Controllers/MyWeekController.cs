using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.Web.Models;

namespace MyPracticeJournal.Web.Controllers
{
    [Route("api/[controller]")]
    public class MyWeekController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IMyWeekService _myWeekService;

        public MyWeekController(IMapper mapper, IMyWeekService myWeekService)
        {
            _mapper = mapper;
            _myWeekService = myWeekService;
        }

        // GET: api/<controller>
        [HttpGet]
        public MyWeekViewModel Get(DateTime? dateFrom)
        {
            if (dateFrom == null)
            {
                dateFrom = DateTime.Now;
            }

            var myWeekDto = _myWeekService.GetWeek(dateFrom.Value);
            return _mapper.Map<MyWeekViewModel>(myWeekDto);
        }

        [HttpPost]
        public MyWeekViewModel Post([FromBody]FinishedPracticeViewModel model)
        {
            _myWeekService.UpdateFinishedPractice(model.PracticeId, model.WeekFromDate, model.DayOfWeek);

            var myWeekDto = _myWeekService.GetWeek(model.WeekFromDate);
            return _mapper.Map<MyWeekViewModel>(myWeekDto);
        }
    }
}
