using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/projects")]
public class ProjectsController : ControllerBase
{
    private readonly OperationsDbContext _context;

    public ProjectsController(OperationsDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<OperationsProject>>> GetProjects()
    {
        var projects = await _context.OperationsProjects
            .OrderBy(project => project.Id)
            .ToListAsync();

        return Ok(projects);
    }
}