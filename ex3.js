//Exercicio 3

//3-1
let num = []
for (i = 0; i <= 100; i++) {
  num.push(i);
}
console.log(num);

//3-2
let numeros = [];
let numerosEntreEles = [];
let diferenca;

for (let num = 0; num < 2; num++) {
  numeros[num] = Number(prompt("Escolha um número"));
}
if (numeros[0] > numeros[1]) {
  diferenca = numeros[0] - numeros[1];
  diferenca = diferenca + 1;
  loopComMaior();
} else {
  diferenca = numeros[0] - numeros[1];
  diferenca = Math.abs(diferenca - 1);
  loopComMenor();
}


function loopComMaior() {
  for (let i = numeros[0]; i >= numeros[1]; i--) {
    numerosEntreEles.push(i)
  }
}
function loopComMenor() {
  for (let i = numeros[0]; i <= numeros[1]; i++) {
    numerosEntreEles.push(i)
  }
}

console.log(numerosEntreEles);