using System;
using Microsoft.Data.Sqlite;


namespace BotServer
{
   public class DBAccess
   {
      public static Absence GetAbsence(int index)
      {
         var connectionStringBuilder = new SqliteConnectionStringBuilder();

         //Use DB in project directory.  If it does not exist, create it:
         connectionStringBuilder.DataSource = "./Absences.db";

         using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
         {
            connection.Open();
            var selectCmd = connection.CreateCommand();
            selectCmd.CommandText = "select * from absences where ID = " + index;

            using (var reader = selectCmd.ExecuteReader())
            {
               while (reader.Read())
               {
                  var absenceStart = reader.GetString(1);
                  var absenceEnd = reader.GetString(2);
                  var absenceReason = reader.GetString(3);
                  Console.WriteLine(absenceStart);
                  Console.WriteLine(absenceEnd);
                  Console.WriteLine(absenceReason);

                  return new Absence(absenceStart, absenceEnd, absenceReason);
               }
            }
         }

         return null;
      }
   }
}
