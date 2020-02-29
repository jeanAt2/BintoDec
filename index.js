var nEntrada;
var final = 0;

function conversor(nEntrada) {

  nEntrada = document.getElementById("numeroEntrada").value;

  nEntrada.toString();
  var valor = nEntrada.split('');
    
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
  final =0;
}

