   var a = Number(prompt("a-ni daxil edin:"));
   var b = Number(prompt("b-ni daxil edin:"));
   var c = Number(prompt("c-ni daxil edin:"));
   var result = a * b * c;

   if (result % 2 != 0) {
       console.log("Daxil edilən hər 3 ədəddən hamısı təkdir. \nO ədələr bunlardır [" + a + " " + b + " " + c + "]");
   } else {
       console.log("Daxil edilən hər 3 ədəddən ya hamısı, ya 2-si, ya da heç olmasa 1-i cütdür. \nO ədələr bunlardır [" + a + " " + b + " " + c + "].");
   }
