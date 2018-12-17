

var babys;
function babyCount(x) {

babys =  0;
var arr = x.split(" ");   
arr.forEach(busqueda);
if (babys ==0) {return "Where\'s the baby?!";}
else return babys;

}

function busqueda(value){
var b = false;
var b2 = false;
var a = false;
var y = false;
value = value.toLowerCase();
if (value.indexOf("b") >-1){b = true;}
if ((value.lastIndexOf("b") >-1) && value.lastIndexOf("b") != value.indexOf("b") ){b2 = true;}
if (value.indexOf("a") >-1){a = true;}
if (value.indexOf("y") >-1){y = true;}
if (a && b && b2 && y) {babys += 1}


var B = false;
var B2 = false;
var A = false;
var I = false;
var E = false;
var S = false;
value = value.toLowerCase();
if (value.indexOf("b") >-1){B = true;}
if ((value.lastIndexOf("b") >-1) && value.lastIndexOf("b") != value.indexOf("b") ){B2 = true;}
if (value.indexOf("a") >-1){A = true;}
if (value.indexOf("i") >-1){I = true;}
if (value.indexOf("e") >-1){E = true;}
if (value.indexOf("s") >-1){S = true;}
if (B && A && B2 && I && E && S) {babys += 1}

}



