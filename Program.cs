using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Data.Sqlite;

namespace BotServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateSQLiteDB();


            CreateHostBuilder(args).Build().Run();
        }

        private static void CreateSQLiteDB()
        {
            var connectionStringBuilder = new SqliteConnectionStringBuilder();

            //Use DB in project directory.  If it does not exist, create it:
            connectionStringBuilder.DataSource = "./Absences.db";

            using (var connection = new SqliteConnection(connectionStringBuilder.ConnectionString))
            {
                connection.Open();          

                var createTableCmd = connection.CreateCommand();
                createTableCmd.CommandText = "CREATE TABLE IF NOT EXISTS absences( " +
                "Id     INTEGER  PRIMARY KEY, " +
                "Start  TEXT     NOT NULL, " +
                "End    TEXT     NOT NULL, " +
                "Reason TEXT     NOT NULL " +
                ")";
                createTableCmd.ExecuteNonQuery();

                //Seed some data:
                using (var transaction = connection.BeginTransaction())
                {
                    var insertCmd = connection.CreateCommand();

                    insertCmd.CommandText = "INSERT INTO absences (Start, End, Reason) VALUES ('2020-10-13','2020-10-15', 'Urlaub1')";
                    insertCmd.ExecuteNonQuery();

                    transaction.Commit();
                }

                //Read the newly inserted data:
                var selectCmd = connection.CreateCommand();
                selectCmd.CommandText = "SELECT * FROM absences";

                using (var reader = selectCmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var message = reader.GetString(0);
                        Console.WriteLine(message);
                    }
                }
             }   
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
