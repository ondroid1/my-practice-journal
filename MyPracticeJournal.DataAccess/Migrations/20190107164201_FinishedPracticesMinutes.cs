using Microsoft.EntityFrameworkCore.Migrations;

namespace MyPracticeJournal.DataAccess.Migrations
{
    public partial class FinishedPracticesMinutes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Minutes",
                table: "FinishedPractices",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Minutes",
                table: "FinishedPractices");
        }
    }
}
