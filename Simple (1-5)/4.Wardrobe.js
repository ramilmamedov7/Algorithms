//        var a = Number(prompt("a-ni (dolabın uzunluğunu) daxil edin:"));
var b = Number(prompt("b-ni (dolabın enini) daxil edin:"));
var c = Number(prompt("c-ni (dolabın hündürlüyünü) daxil edin:"));
var x = Number(prompt("c-ni (qapının hündürlüyünü) daxil edin:"));
var y = Number(prompt("c-ni (qapının enini) daxil edin:"));
var dolabSahe = b * c;
var qapiSahe = x * y;
if (dolabSahe > qapiSahe) {
    console.log("Dolab bu qapıdan keçməyəcək.");
} else {
    console.log("Dolab keçəcək.");

}
