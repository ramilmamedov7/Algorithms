 class LingDistinct
    {
        static void Main(string[] args)
        {
			List<int> reqemler = new List<int> { 5, 7, 9, 5, 3, 3, 11, 4, 7, 11, 13, 14 };
            reqemler.Sort();
            reqemler.RemoveAll(r => r == reqemler[0] || r == reqemler[reqemler.Count - 1]);
            Console.WriteLine(reqemler[0] + "-----" + reqemler[reqemler.Count - 1]);
        }
    }