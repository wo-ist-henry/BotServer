using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BotServer.Models
{
   interface IAbsence
   {
      public DateTime Start { get; set; }
      public DateTime End { get; set; }
      public string Reason { get; set; }
   }
}
