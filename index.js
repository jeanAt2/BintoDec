var nEntrada;
var final = 0;

function conversor(nEntrada) {

    var c = valor.length - 1;

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

function verificacao() {
  nEntrada = document.getElementById("numeroEntrada").value
  nEntrada.toString();
  valor = nEntrada.split('');
  var x;
      valor.forEach(bit => {
        if (bit == 0 | bit == 1) {
          x = true;
        }else{
          x = false;
      }}); 
  
      if (x ==true) {
        conversor(nEntrada);
      }else{
        final = 0;
        document.getElementById("numeroEntrada").value = ' ';
        return alert("Numero inválido.\n Por Favor dige um numero válido ");
      }
      
  }

