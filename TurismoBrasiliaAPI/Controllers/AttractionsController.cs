using Microsoft.AspNetCore.Mvc;
using TurismoBrasiliaAPI.Models;
using System.Collections.Generic;
using System.Linq;
using TurismoBrasiliaAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace TurismoBrasiliaAPI.Controllers
{
    [Route("api/attractions")]
    [ApiController]
    public class AttractionsController : ControllerBase
    {
        private readonly AppDbContext _context;
    
        public AttractionsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAttractions()
        {
            var attractions = await _context.Attractions.ToListAsync();
            return Ok(attractions);
        }

        [HttpPost]
        public async Task<ActionResult<Attraction>> AddAttraction([FromBody] Attraction newAttraction)
        {
            if (newAttraction == null)
            {
                return BadRequest("Atração inválida.");
            }

            _context.Attractions.Add(newAttraction);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAttractions), new { id = newAttraction.Id }, newAttraction);
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult<Attraction>> UpdateAttraction(int id, [FromBody] Attraction updatedAttraction)
        {
            var attraction = await _context.Attractions.FindAsync(id);
            if (attraction == null)
            {
                return NotFound("Atração não encontrada.");
            }

            // Atualiza os campos da atração
            attraction.Name = updatedAttraction.Name ?? attraction.Name;
            attraction.Description = updatedAttraction.Description ?? attraction.Description;
            attraction.Location = updatedAttraction.Location ?? attraction.Location;
            attraction.ImageUrl = updatedAttraction.ImageUrl ?? attraction.ImageUrl;

            await _context.SaveChangesAsync();

            return Ok(attraction);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttraction(int id)
        {
            var attraction = await _context.Attractions.FindAsync(id);
            if (attraction == null)
            {
                return NotFound("Atração não encontrada.");
            }

            _context.Attractions.Remove(attraction); 
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
