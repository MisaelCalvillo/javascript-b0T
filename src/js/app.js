// OBJETOS

var misael = { 
  estatura: 1.83,
  saluda: function () {
    return "Holi 😄"
  },
  computadoras: {
    mac: { year: 2015, isGood: "🤠" },
    acer: { year: 2008, isGood: false }
  },
  edad: 21, 
  lema: "El respeto al derecho ajeno es la paz ✌🏽",
  ciudades: [ "Toluca", "CDMX", "Monterrey"]
}

var carro = {
  modelo: 2016,
  marca: "VW",
  prendido: false,
  prender: function () {
    this.prendido = true;
  },
  apagar: function () {
    this.prendido = false;
  },
  estaPrendido: function () {
    return this.prendido;
  }
}

// JSON
var primerJSON = {
  "titulo": "Cinta Blanca", 
  "tecnologias": {
    "HTML": true,
    "CSS": true,
    "React": false,
  }
}

// ARRAYS

var frutas = [ { fruta: "manzana"}, { fruta: "pera" }, {fruta: "platano"}]
var lacteos = ["leche", "queso"]
var carnes = ["jamón", "salchica", "chuleta", "salami"]

carnes.forEach(function (carne) {
  console.log("A mi me gusta " + carne)
})

var comidas = [frutas, lacteos, carnes ]

// comidas.push()
// comidas.pop()
// comidas.includes()
// comidas.forEach()
// comidas.map()




