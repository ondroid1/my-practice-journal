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
        public MyWeekViewModel Get()
        {
            var myWeekDto = _myWeekService.GetWeek(DateTime.Now);
            return _mapper.Map<MyWeekViewModel>(myWeekDto);
        }
    }
}
