using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.Web.Models;

namespace MyPracticeJournal.Web.Controllers
{
    [Route("api/[controller]")]
    public class ReportController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IReportService _reportService;

        public ReportController(IMapper mapper, IReportService reportService)
        {
            _mapper = mapper;
            _reportService = reportService;
        }

        // GET: api/<controller>
        [HttpGet]
        public ReportViewModel Get(DateTime? dateFrom)
        {
            if (dateFrom == null)
            {
                dateFrom = DateTime.Now;
            }

            var reportDto = _reportService.GetReport(dateFrom.Value.Year, dateFrom.Value.Month);
            return _mapper.Map<ReportViewModel>(reportDto);
        }
    }
}
