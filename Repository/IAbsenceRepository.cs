using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BotServer.Repository
{
   public interface IAbsenceRepository 
   {
      IEnumerable<Absence> GetAbsences();
      Absence GetAbsenceById(int id);
      void AddAbscene(Absence absence);
      bool Delete(int absenceId);
      void UpdateAbscence(Absence absence);
   }
}
