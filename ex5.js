//Exercício 5

let mesEcarro = [];
let carros = []
let mes;
for (let i = 1; i <= 12; i++) {
  mesEcarro.push([null]);
}
for (mes = 0; mes <= 11; mes++) {
  let carro = prompt(`Digite um carro vendido do mes ${mes+1}`);
  mesEcarro[mes].push(carro);
}
mesEcarro[0].shift();
mesEcarro[1].shift();
mesEcarro[2].shift();
mesEcarro[3].shift();
mesEcarro[4].shift();
mesEcarro[5].shift();
mesEcarro[6].shift();
mesEcarro[7].shift();
mesEcarro[8].shift();
mesEcarro[9].shift();
mesEcarro[10].shift();
mesEcarro[11].shift();
console.log(mesEcarro);