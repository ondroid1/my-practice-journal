using Microsoft.EntityFrameworkCore.Migrations;

namespace MyPracticeJournal.DataAccess.Migrations
{
    public partial class TutorialUrlInSchedule : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TutorialUrl",
                table: "Practices",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TutorialUrl",
                table: "Practices");
        }
    }
}
