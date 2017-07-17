var n = Number(prompt("Rəqəmi daxil edin"))
var start = 1;
var count = 0;
if (n > 0) {
    while (n >= start) {
        if (n % start == 0) {
            count++;
        }
        start++;
    }
    console.log(count + "-" + start);
} else {
    console.log("Rəqəmi düzgün daxil edin!")
}
