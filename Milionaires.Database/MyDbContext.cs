using Microsoft.EntityFrameworkCore;
using Milionaires.Database.Entities;

namespace Milionaires.Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Score> Scores { get; set; }
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Score>().Property(e => e.Name).HasMaxLength(25);
            var scores = new List<Score> {
                new Score { Id = 1, Name = "Ania", Result = 500, Date = new DateTime(2024, 1, 1) },
                new Score { Id = 2, Name = "Maciek", Result = 500, Date = new DateTime(2024, 1, 9) },
                new Score { Id = 3, Name = "Lena", Result = 500, Date = new DateTime(2024, 1, 8) },
                new Score { Id = 4, Name = "Piotr", Result = 500, Date = new DateTime(2024, 1, 1) },
                new Score { Id = 5, Name = "Zofia", Result = 500, Date = new DateTime(2024, 1, 6) },
                new Score { Id = 6, Name = "Kamil", Result = 500, Date = new DateTime(2024, 1, 9) },
                new Score { Id = 7, Name = "Magda", Result = 500, Date = new DateTime(2024, 1, 11) },
                new Score { Id = 8, Name = "Łukasz", Result = 500, Date = new DateTime(2024, 1, 4) },
                new Score { Id = 9, Name = "Aleksandra", Result = 2000, Date = new DateTime(2024, 1, 15) },
                new Score { Id = 10, Name = "Adam", Result = 2000, Date = new DateTime(2024, 1, 1) },
                new Score { Id = 11, Name = "Monika", Result = 2000, Date = new DateTime(2024, 1, 7) },
                new Score { Id = 12, Name = "Bartosz", Result = 5000, Date = new DateTime(2024, 1, 18) },
                new Score { Id = 13, Name = "Natalia", Result = 5000, Date = new DateTime(2024, 1, 9) },
                new Score { Id = 14, Name = "Krzysztof", Result = 5000, Date = new DateTime(2024, 1, 20) },
                new Score { Id = 15, Name = "Joanna", Result = 5000, Date = new DateTime(2024, 1, 21) },
                new Score { Id = 16, Name = "Dominik", Result = 5000, Date = new DateTime(2024, 1, 12) },
                new Score { Id = 17, Name = "Weronika", Result = 5000, Date = new DateTime(2024, 1, 3) },
                new Score { Id = 18, Name = "Marcin", Result = 10000, Date = new DateTime(2024, 1, 24) },
                new Score { Id = 19, Name = "Karolina", Result = 10000, Date = new DateTime(2024, 1, 25) },
                new Score { Id = 20, Name = "Dawid", Result = 10000, Date = new DateTime(2024, 1, 6) },
                new Score { Id = 21, Name = "Marta", Result = 10000, Date = new DateTime(2024, 1, 27) },
                new Score { Id = 22, Name = "Artur", Result = 40000, Date = new DateTime(2024, 1, 28) },
                new Score { Id = 23, Name = "Patrycja", Result = 40000, Date = new DateTime(2024, 1, 29) },
                new Score { Id = 24, Name = "Tomasz", Result = 40000, Date = new DateTime(2024, 1, 30) },
                new Score { Id = 25, Name = "Kinga", Result = 75000, Date = new DateTime(2024, 1, 31) },
                new Score { Id = 26, Name = "Adrian", Result = 75000, Date = new DateTime(2024, 1, 1) },
                new Score { Id = 27, Name = "Karol", Result = 150000, Date = new DateTime(2024, 1, 2) },
                new Score { Id = 28, Name = "Justyna", Result = 150000, Date = new DateTime(2024, 1, 10) },
                new Score { Id = 29, Name = "Rafał", Result = 250000, Date = new DateTime(2024, 1, 14) },
                new Score { Id = 30, Name = "Szymon", Result = 500000, Date = new DateTime(2024, 1, 25) },
            };
            modelBuilder.Entity<Score>().HasData(scores);
        }
    }
}
