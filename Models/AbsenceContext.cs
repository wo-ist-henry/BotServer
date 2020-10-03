using Microsoft.EntityFrameworkCore;

namespace BotServer.Models
{
    public class AbsenceContext : DbContext
    {
        public AbsenceContext(DbContextOptions<AbsenceContext> options)
            : base(options)
        {
        }

        public DbSet<Absence> Absences { get; set; }
    }     
}