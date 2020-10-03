using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BotServer.Models;

namespace BotServer.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class AbsenceController : ControllerBase
   {
      private readonly AbsenceContext _context;

      public AbsenceController(AbsenceContext context)
      {
         _context = context;
      }

      // GET: api/Absence/5
      [HttpGet("{id}")]
      public async Task<ActionResult<Absence>> GetAbsence(long id)
      {
         var absence = DBAccess.GetAbsence((int)id);

         if (absence == null)
         {
            return NotFound();
         }

         return absence;
      }

      // PUT: api/Absence/5
      // To protect from overposting attacks, enable the specific properties you want to bind to, for
      // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
      [HttpPut("{id}")]
      public async Task<IActionResult> PutAbsence(long id, Absence absence)
      {
         if (id != absence.Id)
         {
            return BadRequest();
         }

        
         try
         {
            //DBAccess.UpdateAbsence((int)id);
         }
         catch (DbUpdateConcurrencyException)
         {
            if (!AbsenceExists(id))
            {
               return NotFound();
            }
            else
            {
               throw;
            }
         }

         return NoContent();
      }

      // POST: api/Absence
      // To protect from overposting attacks, enable the specific properties you want to bind to, for
      // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
      [HttpPost]
      public async Task<ActionResult<Absence>> PostAbsence(Absence absence)
      {
         _context.Absences.Add(absence);
         await _context.SaveChangesAsync();

         return CreatedAtAction(nameof(GetAbsence), new { id = absence.Id }, absence);
      }

      // DELETE: api/Absence/5
      [HttpDelete("{id}")]
      public async Task<ActionResult<Absence>> DeleteAbsence(long id)
      {
         var absence = await _context.Absences.FindAsync(id);
         if (absence == null)
         {
            return NotFound();
         }

         _context.Absences.Remove(absence);
         await _context.SaveChangesAsync();

         return absence;
      }

      private bool AbsenceExists(long id)
      {
         return false;
         //return DBAccess.AbsenceExists(id);
      }
   }
}
