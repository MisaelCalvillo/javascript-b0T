// funcion 

// function sumar() {
//   var num1 = document.getElementById('numero1').value;
//   var num2 = document.getElementById('numero2').value;
//   var res = document.getElementById('resultado');

//   var resultado  = Number(num1) + Number(num2);
//   res.innerHTML = resultado;
  
//   return resultado;
// }

function esExacta(num1, num2) {
  if ((num1 % num2) === 0) {
    return true;
  } else {
    return false;
  }
}

function programa1() {
  var numero1 = prompt("Ingresa el valor del primer número: ");
  var numero2 = prompt("Ingresa el valoer del segundo número: ");
  if (esExacta(numero1, numero2)) {
    alert("La división es exacta.")
  } else {
    alert("La división no es exacta.")
  }
}

programa1();
programa1();

