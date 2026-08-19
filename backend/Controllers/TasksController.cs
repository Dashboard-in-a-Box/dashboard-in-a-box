using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/tasks")]
public class TasksController : ControllerBase
{
    private readonly OperationsDbContext _context;

    public TasksController(OperationsDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<OperationsTask>>> GetTasks()
    {
        var tasks = await _context.OperationsTasks
            .OrderBy(task => task.Id)
            .ToListAsync();

        return Ok(tasks);
    }
}