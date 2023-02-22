using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Repository
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
    }
}
