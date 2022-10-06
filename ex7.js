//Exercício 7

let mesEcarro = [];
let mes;
let contCarros = 0;
let pesquisarCarro;

for (let i = 1; i <= 12; i++) {
  mesEcarro.push([0]);
}
for (mes = 0; mes <= 11; mes++) {
  let qntCarros = Number(prompt(`Digite quantos carros foram vendido do mes ` +
    `${mes + 1}`));

  for (let qntCarro = 0; qntCarro < qntCarros; qntCarro++) {

    let carros = prompt(`Digite qual carro foi vendido no mes ` +
      `${mes + 1}`);

    mesEcarro[mes].push(carros.toUpperCase());
  }
}

pesquisarCarro = prompt(`Qual carro você quer procurar ?`);
pesquisarCarro = pesquisarCarro.toUpperCase();

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

 for (mes = 0; mes <= 11; mes++) {
   for (let qntCarro = 0; qntCarro < mesEcarro[mes].length; qntCarro++) {
     if (mesEcarro[mes][qntCarro] == pesquisarCarro) {
       contCarros = contCarros + 1;
     }
   }
 }

console.log(`Foram vendidos ${contCarros} ${pesquisarCarro}  nesse ano.`)
console.log(mesEcarro);