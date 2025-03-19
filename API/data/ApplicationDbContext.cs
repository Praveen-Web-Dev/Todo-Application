using System;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.data;

public class ApplicationDbContext: DbContext
{
    
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<TaskItem> Tasks { get; set; }
    

}
