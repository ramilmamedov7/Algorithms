var n = Number(prompt("Məbləği daxil edin:"));
var count = 0;
if (n % 5 == 0) {
    if (n >= 100) {
        count = count + parseInt(n / 100);
        n = n % 100;
    }
    if (n >= 50) {
        count = count + parseInt(n / 50);
        n = n % 50;
    }
    if (n >= 20) {
        count = count + parseInt(n / 20);
        n = n % 20;
    }
    if (n >= 10) {
        count = count + parseInt(n / 10);
        n = n % 10;
    }
    if (n >= 5) {
        count = count + parseInt(n / 5);
        n = n % 5;
    }
    console.log(count);
} else {
    console.log("Bankomant qalıq qaytarmır!");
}
