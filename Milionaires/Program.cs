using Microsoft.EntityFrameworkCore;
using Milionaires.Database;
using Milionaires.Middleware;
using Milionaires.Service;

namespace Milionaires
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllersWithViews();

            builder.Services.AddDbContext<MyDbContext>(options => options.UseInMemoryDatabase("MemoryDb"));

            builder.Services.AddScoped<IGameService, GameService>();
            builder.Services.AddScoped<ErrorHandlingMiddleware>();

            var app = builder.Build();

            if (app.Environment.IsProduction())
            {
                app.UseMiddleware<ErrorHandlingMiddleware>();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}
