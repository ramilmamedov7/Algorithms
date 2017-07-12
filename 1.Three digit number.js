 var n = Number(prompt("Reqem girin"));
         var first = 0, last = 0;
         if (n >= 100 && n <= 999) {
             first = parseInt(n / 100);
             last = n % 10;
             if (first > last) {
                 console.log(first);
             } else if (last > first) {
                 console.log(last);
             } else {
                 console.log("=");
             }
         } else {
             console.log("Reqem sehvdir");
         }