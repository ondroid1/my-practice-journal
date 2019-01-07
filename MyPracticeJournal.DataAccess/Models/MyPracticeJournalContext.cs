using System;
using Microsoft.EntityFrameworkCore;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.DataAccess
{
    public class MyPracticeJournalContext : DbContext
    {
        public MyPracticeJournalContext(DbContextOptions<MyPracticeJournalContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Schedule>()
                .HasIndex(c => new { c.DayOfWeek, c.PracticeId })
                .IsUnique()
                .HasName("IX_DayOfWeek_PracticeId");
        }

        public DbSet<Goal> Goals { get; set; }
        public DbSet<Practice> Practices { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<FinishedPractice> FinishedPractices { get; set; }
    }
}
