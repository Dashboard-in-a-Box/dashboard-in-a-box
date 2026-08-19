namespace Backend.Models;

public class OperationsTask
{
    public long Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Project { get; set; } = string.Empty;

    public string Owner { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public string Priority { get; set; } = string.Empty;

    public DateOnly DueDate { get; set; }

    public string Source { get; set; } = string.Empty;

    public DateTime LastSync { get; set; }
}