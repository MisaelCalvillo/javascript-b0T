// funcion 

function sumar() {
  var num1 = document.getElementById('numero1').value;
  var num2 = document.getElementById('numero2').value;
  var res = document.getElementById('resultado');

  var resultado  = Number(num1) + Number(num2);
  res.innerHTML = resultado;
  
  return resultado;
}

