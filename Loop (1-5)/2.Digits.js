var n = Number(prompt("Rəqəmi daxil edin"));
var digits = 1;
if (n > 0) {
    while (n >= 10) {
        n = n / 10;
        digits++;
    }
    console.log(digits);
} else {
    console.log("Rəqəmi düzgün daxil edin!");
}