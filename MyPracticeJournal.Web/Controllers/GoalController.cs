using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MyPracticeJournal.Web.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyPracticeJournal.Web.Controllers
{
    [Route("api/[controller]")]
    public class GoalController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<GoalViewModel> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new GoalViewModel
            {
                Id = index,
                Name = "Goal " + index,
                Description = "Desc " + index
            });
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
                // TODO
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put([FromBody]GoalViewModel model)
        {
            if (TryValidateModel(model))
            {
                // TODO
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
