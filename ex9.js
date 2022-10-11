//Exercício 9

let totalIngressos = Number(prompt("Quantos ingressos vocês vendeu?"));
let ingressosEstudantes = 0;
let ingressosPopular = 0;
let ingressosVip = 0;
let nomes = []
let tiposIngresso = []

for (let ingressos = 0; ingressos < totalIngressos ; ingressos ++) {
  let nome = prompt("Seu nome");
  nomes.push(nome);
  let ingresso = Number(prompt("Digite 0 para ingresso estudante,1 popular,2 vip"));
  if (ingresso === 0 ) {
    ingressosEstudantes = ingressosEstudantes + 1;
  } else if (ingresso === 1) {
    ingressosPopular = ingressosPopular + 1;
  } else if (ingresso === 2) {
    ingressosVip = ingressosVip + 1;
  }
  tiposIngresso.push(ingresso);
}
ingressosEstudantes = ingressosEstudantes * 10;
ingressosPopular = ingressosPopular * 20;
ingressosVip = ingressosVip * 30;

console.log("Arrecadado do estudante", ingressosEstudantes);
console.log("Arrecadado do Popular", ingressosPopular);
console.log("Arrecadado do vip", ingressosVip);
let valorTotal = ingressosEstudantes + ingressosPopular + ingressosVip;
console.log("Arrecadado Total", valorTotal);
