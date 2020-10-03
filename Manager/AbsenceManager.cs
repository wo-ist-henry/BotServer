using BotServer.Models;
using BotServer.Repository;
using System;
using System.Collections.Generic;

namespace BotServer.Manager
{
   public class AbsenceManager : IAbsenceManager
   {
      private readonly AbsenceRepository _absenceRepo = new AbsenceRepository();

      public void AddAbscene(Absence absence)
      {
         _absenceRepo.AddAbscene(absence);
      }

      public DBAbsence CurrentAbsence()
      {
         var absenceList = _absenceRepo.GetAbsences();
         var currentAbsence = absenceList.Find(absence => absence.Start < DateTime.Now && absence.End > DateTime.Now);
         return currentAbsence;
      }

      public void Delete(int absenceId)
      {
         _absenceRepo.Delete(absenceId);
      }

      public DBAbsence GetAbsence(Absence absence)
      {
         var absenceList = _absenceRepo.GetAbsences();
         var foundAbsence = absenceList.Find(absenceItem => absenceItem.Start == absence.Start &&
         absenceItem.End == absence.End &&
         absenceItem.Reason == absence.Reason);
         return foundAbsence;
      }

      public DBAbsence GetAbsenceById(int absenceId)
      {
         return _absenceRepo.GetAbsenceById(absenceId);
      }

      public List<DBAbsence> GetAbsences()
      {
         return _absenceRepo.GetAbsences();
      }

      public void UpdateAbscence(DBAbsence absence)
      {
         _absenceRepo.UpdateAbscence(absence);
      }
   }
}
