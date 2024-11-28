using Microsoft.EntityFrameworkCore;
using TurismoBrasiliaAPI.Models;

namespace TurismoBrasiliaAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }  // Tabela de usuários
        public DbSet<Attraction> Attractions { get; set; }
    }
}
