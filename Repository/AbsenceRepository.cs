using BotServer.Models;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BotServer.Repository
{
   public class AbsenceRepository : IAbsenceRepository
   {
      private SqliteConnectionStringBuilder GetAbsenceDB()
      {
         var connectionStringBuilder = new SqliteConnectionStringBuilder();

         //Use DB in project directory.  If it does not exist, create it:
         connectionStringBuilder.DataSource = "./Absences.db";

         using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
         {
            connection.Open();
            var command = connection.CreateCommand();

            command.CommandText = "CREATE TABLE IF NOT EXISTS absence ";
            command.CommandText += "( Id INTEGER PRIMARY KEY AUTOINCREMENT, Start TEXT NOT NULL, End TEXT NOT NULL, Reason TEXT NOT NULL )";
            command.ExecuteNonQuery();

            connection.Close();

         }
            return connectionStringBuilder;
      }
      public void AddAbscene(Absence absence)
      {
         var absenceDB = GetAbsenceDB();

         using (var connection = new SqliteConnection(absenceDB.ConnectionString))
         {
            connection.Open();
            var addCommand = connection.CreateCommand();
            addCommand.CommandText = "INSERT INTO absence (Start, End, Reason) VALUES(" + absence.AbsenceToDbAddString() + ")";
            addCommand.ExecuteNonQuery();
            connection.Close();
         }
      }

   
   }
}
