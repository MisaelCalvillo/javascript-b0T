// 1
var num1 = 30;
var num2 = 3;

if ((num1 % num2) == 0) {
  console.log("La división es EXACTA 🤩");
} else {
  console.log("La división no es EXACTA 🤨");
}

// 2
var num1 = 100;
var num2 = 10;

if(num1 > num2) {
  console.log("Numero 1 es Mayor");
} else if (num2 > num1) {
  console.log("Numero 2 es Mayor");
} else {
  console.log("Ambos son iguales");
}

// 3

var anioActual = 2018;
var algunAnio = 2018;

if (anioActual > algunAnio) {
  console.log("Han pasado ", (anioActual - algunAnio), " años.");
} else if(anioActual === algunAnio) {
  console.log("Es este mismo año dude");
} else {
  console.log("Faltan ", (algunAnio - 2018), "años.");
}
