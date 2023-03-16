
using System.Text;
using BackEnd.Helpers;
using BackEnd.Interfaces;
using BackEnd.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
IConfiguration Configuration;
Configuration = builder.Configuration;

// Add services to the container.
// Add services to the container.
builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), b
         => b.MigrationsAssembly("BackEnd"));

});

builder.Services.AddSingleton<IConfiguration>(Configuration);
builder.Services.AddCors();
builder.Services.AddRazorPages();


builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);
builder.Services.AddControllers();

var appSettingsSection = builder.Configuration.GetSection("AppSettings");
builder.Services.Configure<AppSettings>(appSettingsSection);
var appSettings = appSettingsSection.Get<AppSettings>();
var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(appSettings.Secret));
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
    opt => {
        opt.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            ValidateIssuer = false,
            ValidateAudience = false,
            IssuerSigningKey = key
        };
    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
