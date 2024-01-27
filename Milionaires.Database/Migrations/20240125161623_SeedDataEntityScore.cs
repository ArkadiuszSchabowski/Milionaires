using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Milionaires.Database.Migrations
{
    /// <inheritdoc />
    public partial class SeedDataEntityScore : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Scores",
                columns: new[] { "Id", "Date", "Name", "Result" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ania", 500 },
                    { 2, new DateTime(2024, 1, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "Maciek", 500 },
                    { 3, new DateTime(2024, 1, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "Lena", 500 },
                    { 4, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Piotr", 500 },
                    { 5, new DateTime(2024, 1, 6, 0, 0, 0, 0, DateTimeKind.Unspecified), "Zofia", 500 },
                    { 6, new DateTime(2024, 1, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "Kamil", 500 },
                    { 7, new DateTime(2024, 1, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "Magda", 500 },
                    { 8, new DateTime(2024, 1, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "Łukasz", 500 },
                    { 9, new DateTime(2024, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Aleksandra", 2000 },
                    { 10, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Adam", 2000 },
                    { 11, new DateTime(2024, 1, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "Monika", 2000 },
                    { 12, new DateTime(2024, 1, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bartosz", 5000 },
                    { 13, new DateTime(2024, 1, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), "Natalia", 5000 },
                    { 14, new DateTime(2024, 1, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Krzysztof", 5000 },
                    { 15, new DateTime(2024, 1, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), "Joanna", 5000 },
                    { 16, new DateTime(2024, 1, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "Dominik", 5000 },
                    { 17, new DateTime(2024, 1, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "Weronika", 5000 },
                    { 18, new DateTime(2024, 1, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), "Marcin", 10000 },
                    { 19, new DateTime(2024, 1, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Karolina", 10000 },
                    { 20, new DateTime(2024, 1, 6, 0, 0, 0, 0, DateTimeKind.Unspecified), "Dawid", 10000 },
                    { 21, new DateTime(2024, 1, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), "Marta", 10000 },
                    { 22, new DateTime(2024, 1, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "Artur", 40000 },
                    { 23, new DateTime(2024, 1, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "Patrycja", 40000 },
                    { 24, new DateTime(2024, 1, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), "Tomasz", 40000 },
                    { 25, new DateTime(2024, 1, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), "Kinga", 75000 },
                    { 26, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Adrian", 75000 },
                    { 27, new DateTime(2024, 1, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "Karol", 150000 },
                    { 28, new DateTime(2024, 1, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Justyna", 150000 },
                    { 29, new DateTime(2024, 1, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "Rafał", 250000 },
                    { 30, new DateTime(2024, 1, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Szymon", 500000 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Scores",
                keyColumn: "Id",
                keyValue: 30);
        }
    }
}
