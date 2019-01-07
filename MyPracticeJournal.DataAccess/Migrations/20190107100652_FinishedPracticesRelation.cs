using Microsoft.EntityFrameworkCore.Migrations;

namespace MyPracticeJournal.DataAccess.Migrations
{
    public partial class FinishedPracticesRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_FinishedPractices_PracticeId",
                table: "FinishedPractices",
                column: "PracticeId");

            migrationBuilder.AddForeignKey(
                name: "FK_FinishedPractices_Practices_PracticeId",
                table: "FinishedPractices",
                column: "PracticeId",
                principalTable: "Practices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FinishedPractices_Practices_PracticeId",
                table: "FinishedPractices");

            migrationBuilder.DropIndex(
                name: "IX_FinishedPractices_PracticeId",
                table: "FinishedPractices");
        }
    }
}
