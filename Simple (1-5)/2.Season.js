 var m = Number(prompt("Reqem daxil edin:"));
 if (m >= 1 && m <= 12) {
     if (m >= 3 && m <= 5) {
         console.log("Yaz");
     } else if (m >= 6 && m <= 8) {
         console.log("Yay");
     } else if (m >= 9 && m <= 11) {
         console.log("Payiz");
     } else {
         console.log("Qish");
     }
 } else {
     console.log(m + " - bele bir ay yoxdur!")
 }
