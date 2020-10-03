using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BotServer.Manager
{
   interface IAbsenceManager
   {
      List<Absence> GetAbsences();
      Absence GetAbsenceById(int absenceId);
      void AddAbscene(Absence absence);
      bool Delete(int absenceId);
      void UpdateAbscence(Absence absence);
      Absence? CurrentAbsence();
   }
}
