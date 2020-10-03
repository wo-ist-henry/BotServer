﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BotServer.Repository
{
   public interface IAbsenceRepository 
   {
      List<Absence> GetAbsences();
      Absence GetAbsenceById(int absenceId);
      void AddAbscene(Absence absence);
      bool Delete(int absenceId);
      void UpdateAbscence(Absence absence);
   }
}
