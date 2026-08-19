namespace Backend.Models;

public class OperationsProject
{
    public long Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Owner { get; set; } = string.Empty;

    public string Status { get; set; } = string.Empty;

    public int Progress { get; set; }
}