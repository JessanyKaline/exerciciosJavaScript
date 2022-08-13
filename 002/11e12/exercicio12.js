/*Vamos tentar fazer com que um loop "while" funcione enviando valores 
para um array. 
Adicione os números de 5 a 0 (inclusive) em ordem decrescente para 
"meuArray" usar um "while" loop e imprima-o no final.*/ 

const meuArray = [];
let valor = 5;

while (valor >= 0  ) {
  meuArray.push(valor);
  valor--;
}

console.log(meuArray)