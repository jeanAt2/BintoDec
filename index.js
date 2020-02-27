var numeroEntrada = document.getElementById('#numeroEntrada').value;
var final = 0;


function conversor(numeroEntrada) {

    numeroEntrada.toString();
    var valor = numeroEntrada.split('');
    
    console.log(valor);
    var c = valor.length - 1;

    console.log(c);

  for (var index = 0; index < valor.length; index++) {
      var x = valor[index];
      y = parseInt(x);
      if (y == 0) {
        y = 0;
      }else{
        y = 2 ** c;
      }
      final = final + y;
      c--;
  }
  resultado();
 
}

function resultado() {
  alert("Decimal: " + final);
}

conversor();

