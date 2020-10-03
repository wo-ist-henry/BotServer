using BotServer.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BotServer.Manager
{
   public class AbsenceManager : IAbsenceManager
   {
      private readonly AbsenceRepository _absenceRepo = new AbsenceRepository();

      public void AddAbscene(Absence absence)
      {
         _absenceRepo.AddAbscene(absence);
      }

      public Absence CurrentAbsence()
      {
         var absenceList = _absenceRepo.GetAbsences();
         var currentAbsence = absenceList.Find(absence => absence.Start < DateTime.Now && absence.End > DateTime.Now);
         return currentAbsence;
      }

      public bool Delete(int absenceId)
      {
         return _absenceRepo.Delete(absenceId);
      }

      public Absence GetAbsenceById(int absenceId)
      {
         return _absenceRepo.GetAbsenceById(absenceId);
      }

      public List<Absence> GetAbsences()
      {
         return _absenceRepo.GetAbsences();
      }

      public void UpdateAbscence(Absence absence)
      {
         _absenceRepo.UpdateAbscence(absence);
      }
   }
}
