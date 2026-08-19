using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class OperationsDbContext : DbContext
{
    public OperationsDbContext(DbContextOptions<OperationsDbContext> options)
        : base(options)
    {
    }

    public DbSet<OperationsProject> OperationsProjects =>
        Set<OperationsProject>();

    public DbSet<OperationsTask> OperationsTasks =>
        Set<OperationsTask>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<OperationsProject>(entity =>
        {
            entity.ToTable("operations_projects");

            entity.Property(project => project.Id)
                .HasColumnName("id");

            entity.Property(project => project.Name)
                .HasColumnName("name");

            entity.Property(project => project.Owner)
                .HasColumnName("owner");

            entity.Property(project => project.Status)
                .HasColumnName("status");

            entity.Property(project => project.Progress)
                .HasColumnName("progress");
        });

        modelBuilder.Entity<OperationsTask>(entity =>
        {
            entity.ToTable("operations_tasks");

            entity.Property(task => task.Id)
                .HasColumnName("id");

            entity.Property(task => task.Title)
                .HasColumnName("title");

            entity.Property(task => task.Project)
                .HasColumnName("project");

            entity.Property(task => task.Owner)
                .HasColumnName("owner");

            entity.Property(task => task.Status)
                .HasColumnName("status");

            entity.Property(task => task.Priority)
                .HasColumnName("priority");

            entity.Property(task => task.DueDate)
                .HasColumnName("due_date");

            entity.Property(task => task.Source)
                .HasColumnName("source");

            entity.Property(task => task.LastSync)
                .HasColumnName("last_sync");
        });
    }
}