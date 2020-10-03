using System;

namespace BotServer.Models
{
   public class Absence : IAbsence
   {
      public DateTime Start { get; set; }
      public DateTime End { get; set; }
      public string Reason { get; set; }
      public Absence(DateTime start, DateTime end, string reason)
      {
         this.Start = start;
         this.End = end;
         this.Reason = reason;
      }
      public String AbsenceToDbAddString()
      {
         return $"'{this.Start}', '{this.End}','{this.End}'";
      }
   }
}
