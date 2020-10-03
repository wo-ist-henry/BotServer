using System;

namespace BotServer.Models
{
   class AbsenceNotFoundException : Exception
   {
      public AbsenceNotFoundException()
      {
      }

      public AbsenceNotFoundException(string message)
          : base(message)
      {
      }

      public AbsenceNotFoundException(string message, Exception inner)
          : base(message, inner)
      {
      }
   }
}
