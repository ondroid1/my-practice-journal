using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.Web.Models;

namespace MyPracticeJournal.Web.Controllers
{
    [Route("api/[controller]")]
    public class PracticeController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IPracticeService _practiceService;
        private readonly IGoalService _goalService;

        public PracticeController(IMapper mapper, IPracticeService practiceService, IGoalService goalService)
        {
            _mapper = mapper;
            _practiceService = practiceService;
            _goalService = goalService;
        }

        // GET: api/<controller>
        [HttpGet]
        public PracticeListViewModel Get()
        {
            var practices = _practiceService.GetPractices();
            var practiceViewModels = _mapper.Map<IEnumerable<PracticeViewModel>>(practices);

            return new PracticeListViewModel
            {
                PracticeList = practiceViewModels.ToList()
            };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public PracticeViewModel Get(int id)
        {
            var goals = _goalService.GetGoals();
            var practice = _practiceService.GetPractice(id);
            var model = _mapper.Map<PracticeViewModel>(practice);
            model.AllGoals = goals.ToList();

            return model;
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]PracticeViewModel model)
        {
            if (TryValidateModel(model))
            {
                var practiceDto = _mapper.Map<PracticeDto>(model);
                _practiceService.CreatePractice(practiceDto);
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put([FromBody]PracticeViewModel model)
        {
            if (TryValidateModel(model))
            {
                var practiceDto = _mapper.Map<PracticeDto>(model);
                _practiceService.UpdatePractice(practiceDto);
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _practiceService.DeletePractice(id);
        }
    }
}
