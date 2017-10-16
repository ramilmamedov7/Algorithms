using System;
using System.Collections.Generic;
using System.Linq;

namespace Duplicate
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = new List<int>() { 6, 5, 6, 6, 19, 3, 4, 5 };
            Console.WriteLine("Old version of list: ");
            list.ForEach(i => Console.Write(i + " "));
            Console.WriteLine("\n" + new string('-', 20));
            List<int> distinct = list.Distinct().ToList();
            Console.WriteLine("New version of list: ");
            distinct.ForEach(i => Console.Write(i + " "));
			
			//AlgoMethod();
			//HashSetMethod();
        }

        public static void AlgoMethod()
        {
            List<string> names = new List<string> { "Anar", "Seid", "Anar", "Seid", "Ali", "calil", "Calil", "Vali", "anar" };
            names.Sort();
            Console.WriteLine("Old version of list: ");
            names.ForEach(i => Console.Write(i + ", "));
            for (int i = 0; i < names.Count - 1; i++)
            {
                //string temp = names[i];
                //names.RemoveAll(a => a == names[i]);
                //names.Add(temp);

                if (names[i].ToUpper() == names[i + 1].ToUpper())
                {
                    names.RemoveAt(i);
                    i = i - 1;
                }
            }
            Console.WriteLine();
            Console.WriteLine(new string('-', 50));
            Console.WriteLine("New version of list: ");
            names.ForEach(i => Console.Write(i + ", "));
            Console.ReadKey();
        }
        public static void HashSetMethod()
        {
            HashSet<string> days = new HashSet<string>() { "sunday", "monday", "sunday", "tuesday", "wednesday", "sunday" };
            foreach (string day in days)
            {
                Console.Write(day + ", ");
            }
        }
    }
}
