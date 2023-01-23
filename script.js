// Função para calcular a hipotenusa
function calculate() {
  var catetoAdjacente = document.getElementById("catetoAdjacente").value;
  var catetoOposto = document.getElementById("catetoOposto").value;
  var hipotenusa = Math.sqrt(catetoAdjacente*catetoAdjacente + catetoOposto*catetoOposto);
  document.getElementById("result").value = hipotenusa;
}
