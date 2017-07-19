var n = Number(prompt("Rəqəm daxil edin:"));
var step = 0;
while (n > 0) {
    var number = n;
    var total = 0;
    while (number >= 1) {
        total = total + number % 10;
        number = parseInt(number / 10);
    }
    console.log(n + " - " + total);
    n = n - total;
    step++;
}
console.log("Quantity of steps: " + step);