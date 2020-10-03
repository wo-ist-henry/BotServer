using BotServer.Models;
using System.Collections.Generic;

namespace BotServer.Repository
{
   public interface IAbsenceRepository 
   {
      List<DBAbsence> GetAbsences();
      DBAbsence GetAbsenceById(int absenceId);
      void AddAbscene(Absence absence);
      void Delete(int absenceId);
      void UpdateAbscence(DBAbsence absence);
   }
}
