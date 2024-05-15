using Microsoft.EntityFrameworkCore;
using PlatformSerivce.Models;

namespace PlatformService.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opt) : base(opt)
        {
            
        }

        public DbSet<Game> Games { get; set; }
        public DbSet<UserSubscribedGame> UserSubscribedGames { get; set; }
    }
}