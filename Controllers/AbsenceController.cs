using System.Collections.Generic;
using System.Threading.Tasks;
using BotServer.Manager;
using BotServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BotServer.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class AbsenceController : ControllerBase
   {
      private readonly AbsenceManager _absenceManager = new AbsenceManager();

      // GET: api/Absence/5
      [HttpGet("{id}")]
      public async Task<ActionResult<DBAbsence>> GetAbsence(int id)
      {
         var absence = _absenceManager.GetAbsenceById(id);

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
      public async Task<IActionResult> PutAbsence(int id, DBAbsence absence)
      {
         if (id != absence.Id)
         {
            return BadRequest();
         }


         try
         {
            _absenceManager.UpdateAbscence(absence);
         }
         catch (AbsenceNotFoundException)
         {
            return NotFound();
         }

         return NoContent();
      }

      // POST: api/Absence
      // To protect from overposting attacks, enable the specific properties you want to bind to, for
      // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
      [HttpPost]
      public ActionResult<DBAbsence> PostAbsence(Absence absence)
      {
         _absenceManager.AddAbscene(absence);
         var newAbsence = _absenceManager.GetAbsence(absence);
         return newAbsence;
      }

      // DELETE: api/Absence/5
      [HttpDelete("{id}")]
      public async Task<ActionResult<DBAbsence>> DeleteAbsence(int id)
      {
         try
         {
            _absenceManager.Delete(id);
         }
         catch (AbsenceNotFoundException)
         {
            return NotFound();
         }
         return NoContent();
      }
   }
}
