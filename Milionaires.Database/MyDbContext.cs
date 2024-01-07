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
    }
}
