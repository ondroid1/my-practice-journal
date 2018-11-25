﻿using System;
using Microsoft.EntityFrameworkCore;
using MyPracticeJournal.DataAccess.Models;

namespace MyPracticeJournal.DataAccess
{
    public class MyPracticeJournalContext : DbContext
    {
        public MyPracticeJournalContext(DbContextOptions<MyPracticeJournalContext> options)
            : base(options)
        { }

        public DbSet<Goal> Goals { get; set; }
    }
}