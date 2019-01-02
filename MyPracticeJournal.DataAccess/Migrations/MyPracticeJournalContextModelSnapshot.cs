﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyPracticeJournal.DataAccess;

namespace MyPracticeJournal.DataAccess.Migrations
{
    [DbContext(typeof(MyPracticeJournalContext))]
    partial class MyPracticeJournalContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyPracticeJournal.DataAccess.Models.Goal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Goals");
                });

            modelBuilder.Entity("MyPracticeJournal.DataAccess.Models.Practice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<int>("GoalId");

                    b.Property<string>("Name");

                    b.Property<string>("TutorialUrl");

                    b.HasKey("Id");

                    b.HasIndex("GoalId");

                    b.ToTable("Practices");
                });

            modelBuilder.Entity("MyPracticeJournal.DataAccess.Models.Schedule", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("DayOfWeek");

                    b.Property<int>("Minutes");

                    b.Property<int>("PracticeId");

                    b.HasKey("Id");

                    b.HasIndex("PracticeId");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("MyPracticeJournal.DataAccess.Models.Practice", b =>
                {
                    b.HasOne("MyPracticeJournal.DataAccess.Models.Goal", "Goal")
                        .WithMany("Practices")
                        .HasForeignKey("GoalId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("MyPracticeJournal.DataAccess.Models.Schedule", b =>
                {
                    b.HasOne("MyPracticeJournal.DataAccess.Models.Practice", "Practice")
                        .WithMany("Schedules")
                        .HasForeignKey("PracticeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
