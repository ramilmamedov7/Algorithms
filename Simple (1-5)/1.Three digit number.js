 var n = Number(prompt("Reqem daxil edin:"));
 var first = 0,
     last = 0;
 if (n >= 100 && n <= 999) {
     first = parseInt(n / 100);
     last = n % 10;
     if (first > last) {
         console.log(first + " bu 3 reqemlinin ilk heddi boyukdur");
     } else if (last > first) {
         console.log(last + " bu 3 reqemlinin son heddi boyukdur");
     } else {
         console.log(" bu 3 reqemlinin ilk ve son heddi beraberdir");
     }
 } else {
     console.log("Reqem sehvdir");
 }
