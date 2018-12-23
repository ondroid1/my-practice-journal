using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;
using MyPracticeJournal.BusinessLogic.Services.Interfaces;
using MyPracticeJournal.Web.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyPracticeJournal.Web.Controllers
{
    [Route("api/[controller]")]
    public class GoalController : Controller
    {
        private readonly IMapper _mapper;
        private readonly IGoalService _goalService;

        public GoalController(IMapper mapper, IGoalService goalService)
        {
            _mapper = mapper;
            _goalService = goalService;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<GoalViewModel> Get()
        {
            var goals = _goalService.GetGoals();
            return _mapper.Map<IEnumerable<GoalViewModel>>(goals);
            //var rng = new Random();
            //return Enumerable.Range(1, 5).Select(index => new GoalViewModel
            //{
            //    Id = index,
            //    Name = "Goal " + index,
            //    Description = "Desc " + index
            //});
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public GoalViewModel Get(int id)
        {
            return new GoalViewModel
            {
                Id = id,
                Name = "Goal " + id,
                Description = "Desc " + id
            };
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]GoalViewModel model)
        {
            if (TryValidateModel(model))
            {
                var goalDto = _mapper.Map<GoalDto>(model);
                var newGoal = _goalService.CreateGoal(goalDto);
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put([FromBody]GoalViewModel model)
        {
            if (TryValidateModel(model))
            {
                var goalDto = _mapper.Map<GoalDto>(model);
                _goalService.UpdateGoal(goalDto);
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            // TODO
        }
    }
}
