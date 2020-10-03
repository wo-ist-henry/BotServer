using BotServer.Models;
using System.Collections.Generic;

namespace BotServer.Manager
{
   interface IAbsenceManager
   {
      List<DBAbsence> GetAbsences();
      DBAbsence GetAbsence(Absence absence);
      DBAbsence GetAbsenceById(int absenceId);
      void AddAbscene(Absence absence);
      void Delete(int absenceId);
      void UpdateAbscence(DBAbsence absence);
      DBAbsence CurrentAbsence();
   }
}
