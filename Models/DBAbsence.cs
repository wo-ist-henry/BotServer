using BotServer.Models;
using System;

public class DBAbsence : IAbsence
{
   public int Id { get; set; }
   public DateTime Start { get; set; }
   public DateTime End { get; set; }
   public string Reason { get; set; }

   public DBAbsence(int id, DateTime start, DateTime end, string reason)
   {
      this.Id = id;
      this.Start = start;
      this.End = end;
      this.Reason = reason;
   }

   public DBAbsence(string dbID, string start, string end, string reason)
   {
      var id = Convert.ToInt32(dbID);
      var startDate = Convert.ToDateTime(start);
      var endDate = Convert.ToDateTime(end);

      var absence = new DBAbsence(id, startDate, endDate, reason);

      this.Id = id;
      this.Start = absence.Start;
      this.End = absence.End;
      this.Reason = reason;
   }
}