 var m = Number(prompt("Birinci rəqəmi daxil edin"));
 var n = Number(prompt("İkinci rəqəmi daxil edin"));
 var toplam = 0
 if (m < n) {
     while (m <= n) {
         toplam = t oplam + m;
         m++;
     }
     console.log(toplam);
 } else {
     console.log("Birinci rəqəm ikincidən böyük olmamalıdır!");
 }
