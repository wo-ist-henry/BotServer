using System;

public class Absence
{
   public long Id { get; set; }
   public DateTime Start { get; set; }
   public DateTime End { get; set; }
   public string Reason { get; set; }
   public Absence(DateTime start, DateTime end, string reason)
   {
      this.Start = start;
      this.End = end;
      this.Reason = reason;
   }

   public Absence(string start, string end, string reason)
   {
      var startDate = Convert.ToDateTime(start);
      var endDate = Convert.ToDateTime(end);
      
      var absence = new Absence(startDate, endDate, reason);
      
      this.Start = absence.Start;
      this.End = absence.End;
      this.Reason = reason;
   }
}