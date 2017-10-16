using System;
using System.Collections.Generic;
using System.Linq;

namespace Difference
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> FirstList = new List<int> { 17, 18, 6, 5, 9, 4, 21 };
            List<int> SecondList = new List<int> { 17, 6, 5, 9, 4, 21, 2, 13 };

            //MetodFirst
            var differenceOfSecond = SecondList.Except(FirstList).ToList();
            var differenceOfFirst = FirstList.Except(SecondList).ToList();
            differenceOfSecond.ForEach(i => Console.WriteLine(i));
            differenceOfFirst.ForEach(i => Console.WriteLine(i));
            Console.WriteLine(new string('-', 30));
            //MethodSecond
            FirstList.ForEach(f => { if (!SecondList.Contains(f)) { Console.WriteLine(f); } });
            SecondList.ForEach(s => { if (!FirstList.Contains(s)) { Console.WriteLine(s); } });
            Console.WriteLine(new string('-', 30));
            //MethodThird
            List<string> FirstNames = new List<string> { "Tom", "John", "Jack" };
            List<string> SecondNames = new List<string> { "Tom", "Richard", "John", "Jonny", "Patrick" };
            Difference(FirstNames, SecondNames);
        }
        public static void Difference(List<string> ListOne, List<string> ListTwo)
        {
            List<string> Same = new List<string> { };
            Same.AddRange(ListOne);
            Same.AddRange(ListTwo);
            foreach (string item1 in ListOne)
            {
                foreach (string item2 in ListTwo)
                {
                    if (item1 == item2)
                    {
                        Same.Remove(item1);
                        Same.Remove(item2);
                    }
                }
            }
            Same.ForEach(i => Console.WriteLine(i));
        }
    }
}
