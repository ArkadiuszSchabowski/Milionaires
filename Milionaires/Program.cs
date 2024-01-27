using Microsoft.EntityFrameworkCore;
using Milionaires.Database;
using Milionaires.Service;

namespace Milionaires
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllersWithViews();

            if (builder.Environment.IsProduction())
            {
                builder.Services.AddDbContext<MyDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MilionairesConnectionString")));
            }
            else
            {
                builder.Services.AddDbContext<MyDbContext>(options => options.UseInMemoryDatabase("MemoryDb"));
            }

            builder.Services.AddScoped<IGameService, GameService>();

            var app = builder.Build();

            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
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
