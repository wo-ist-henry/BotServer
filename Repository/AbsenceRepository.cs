using BotServer.Models;
using Microsoft.Data.Sqlite;
using System;
using System.Collections.Generic;

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
            addCommand.CommandText = $"INSERT INTO absence (Start, End, Reason) VALUES({absence.AbsenceToDbAddString()})";
            addCommand.ExecuteNonQuery();
            connection.Close();
         }
      }

      public List<DBAbsence> GetAbsences()
      {
         List<DBAbsence> absenceList = new List<DBAbsence>();

         var absenceDB = GetAbsenceDB();

         using (var connection = new SqliteConnection(absenceDB.ConnectionString))
         {
            connection.Open();
            var selectCmd = connection.CreateCommand();
            selectCmd.CommandText = "SELECT * FROM absences";

            using (var reader = selectCmd.ExecuteReader())
            {
               while (reader.Read())
               {
                  var absenceId = reader.GetString(0);
                  var absenceStart = reader.GetString(1);
                  var absenceEnd = reader.GetString(2);
                  var absenceReason = reader.GetString(3);
                  Console.WriteLine(absenceStart);
                  Console.WriteLine(absenceEnd);
                  Console.WriteLine(absenceReason);

                  absenceList.Add(new DBAbsence(absenceId, absenceStart, absenceEnd, absenceReason));
               }
            }
            connection.Close();
         }
         return absenceList;
      }

      public DBAbsence GetAbsenceById(int absenceId)
      {
         var absenceDB = GetAbsenceDB();

         using (var connection = new SqliteConnection(absenceDB.ConnectionString))
         {
            connection.Open();
            var selectCmd = connection.CreateCommand();
            selectCmd.CommandText = $"SELECT * FROM absences WHERE ID = {absenceId}";

            using (var reader = selectCmd.ExecuteReader())
            {
               while (reader.Read())
               {
                  var absenceStart = reader.GetString(1);
                  var absenceEnd = reader.GetString(2);
                  var absenceReason = reader.GetString(3);

                  return new DBAbsence(reader.GetString(0), absenceStart, absenceEnd, absenceReason);
               }
            }
            connection.Close();
         }
         return null;
      }

      public void Delete(int absenceId)
      {
         if (GetAbsenceById(absenceId) == null)
         {
            throw new AbsenceNotFoundException();
         }

         var absenceDB = GetAbsenceDB();

         using (var connection = new SqliteConnection(absenceDB.ConnectionString))
         {
            connection.Open();
            var deleteCmd = connection.CreateCommand();
            deleteCmd.CommandText = $"DELETE FROM absences WHERE ID = {absenceId}";
            deleteCmd.ExecuteNonQuery();
            connection.Close();
         }
      }

      public void UpdateAbscence(DBAbsence absence)
      {
         if (GetAbsenceById(absence.Id) == null)
         {
            throw new AbsenceNotFoundException();
         }

         var absenceDB = GetAbsenceDB();

         using (var connection = new SqliteConnection(absenceDB.ConnectionString))
         {
            connection.Open();
            var updateCmd = connection.CreateCommand();
            updateCmd.CommandText = $"UPDATE absence SET Start = '{absence.Start}', End = '{absence.End }', Reason = '{absence.Reason}' WHERE Id = {absence.Id}";
         }
      }
   }
}
