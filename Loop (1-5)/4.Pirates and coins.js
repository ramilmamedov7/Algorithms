  var m = Number(prompt("Total coins:"));
  var a = Number(prompt("Youngest pirate's coins:"));
  var n = 0;

  if (a * 2 != m) {
      while (m > a) {
          m = m - a;
          n++;
          a++;
      }
      console.log(n);

  } else {
      console.log("Inputs aren't correct");
  }
