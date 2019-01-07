using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using MyPracticeJournal.BusinessLogic.DataTransferObjects;

namespace MyPracticeJournal.Web.Models
{
    public class PracticeViewModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Name { get; set; }

        [MaxLength(1000)]
        public string Description { get; set; }

        public IList<GoalDto> AllGoals { get; set; }

        public GoalDto Goal { get; set; }

        public int GoalId { get; set; }

        public string TutorialUrl { get; set; }

        public IList<ScheduleDto> Schedules { get; set; } = new List<ScheduleDto>();

        public int MondayMinutes
        {
            get => GetScheduleMinutes(DayOfWeek.Monday);
            set => SetScheduleMinutes(DayOfWeek.Monday, value);
        }

        public int TuesdayMinutes
        {
            get => GetScheduleMinutes(DayOfWeek.Tuesday);
            set => SetScheduleMinutes(DayOfWeek.Tuesday, value);
        }

        public int WednesdayMinutes
        {
            get => GetScheduleMinutes(DayOfWeek.Wednesday);
            set => SetScheduleMinutes(DayOfWeek.Wednesday, value);
        }

        public int ThursdayMinutes
        {
            get => GetScheduleMinutes(DayOfWeek.Thursday);
            set => SetScheduleMinutes(DayOfWeek.Thursday, value);
        }

        public int FridayMinutes
        {
            get => GetScheduleMinutes(DayOfWeek.Friday);
            set => SetScheduleMinutes(DayOfWeek.Friday, value);
        }

        public int SaturdayMinutes
        {
            get => GetScheduleMinutes(DayOfWeek.Saturday);
            set => SetScheduleMinutes(DayOfWeek.Saturday, value);
        }

        public int SundayMinutes
        {
            get => GetScheduleMinutes(DayOfWeek.Sunday);
            set => SetScheduleMinutes(DayOfWeek.Sunday, value);
        }

        private int GetScheduleMinutes(DayOfWeek dayOfWeek)
        {
            return Schedules.FirstOrDefault(x => x.DayOfWeek == dayOfWeek)?.Minutes ?? 0;
        }

        private void SetScheduleMinutes(DayOfWeek dayOfWeek, int value)
        {
            var schedule = Schedules.FirstOrDefault(x => x.DayOfWeek == dayOfWeek);
            if (schedule == null)
            {
                schedule = new ScheduleDto
                {
                    DayOfWeek = dayOfWeek
                };
                Schedules.Add(schedule);
            }

            schedule.Minutes = value;
        }
    }
}
