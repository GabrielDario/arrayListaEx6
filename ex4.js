//Exercício 4

let numeros = [];
let qntNumeros = Number(prompt("Digite quantos números você quer"));

for (let i = 1; i <= qntNumeros; i++) {
  let numero = Number(prompt("Escolha um número"));
  numeros.push(numero);
}

console.log(numeros);