using Microsoft.EntityFrameworkCore;
using Milionaires.Database;
using Milionaires.Service;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IQuestionService, QuestionService>();

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<MyDbContext>(options => options.UseInMemoryDatabase("MilionairesDatabaseDevelopment"));
}
else
{
    builder.Services.AddDbContext<MyDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MilionairesDatabaseProduction")));
}



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
