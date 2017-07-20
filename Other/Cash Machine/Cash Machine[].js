var n = Number(prompt("Məbləği daxil edin:"));
//var avbMoney = [
//                    ["100", 100],
//                    ["50", 50],
//                    ["20", 20],
//                    ["10", 10],
//                    ["5", 5]
//                ];
var avbMoney = [100, 50, 20, 10, 5]
var count = 0;
var netice = [];
if (n % avbMoney[avbMoney.length - 1] == 0) {
    for (var i = 0; i < avbMoney.length; i++) {
        if (n >= avbMoney[i]) {
            netice[i] = parseInt(n / avbMoney[i]);
            count = count + parseInt(n / avbMoney[i]);
            n = n % avbMoney[i];
        } else {
            netice[i] = 0;
        }
    }
    console.log(netice);
} else {
    console.log("Bankomant qalıq qaytarmır!");
}