using Microsoft.EntityFrameworkCore;
using Milionaires.Database;

namespace Milionaires.Tests.Fakes
{
    public class FakeDbContext : MyDbContext
    {
        public FakeDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
            
        }
    }
}
