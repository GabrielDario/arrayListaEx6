//Exercício 8

let mesEcarro = [];
let carros = []
let mes;

for (let i = 1; i <= 12; i++) {
  mesEcarro.push([null]);
}

function abrirCadastrar() {
  fecharTudo();
  var cadastrarJS = document.getElementById("cadastrar");
  cadastrarJS.style.display = "block";
}

function abrirConsultar() {
  fecharTudo();
  var consultarJs = document.getElementById("consultar");
  consultarJs.style.display = "block";
}

function abrirRemover() {
  fecharTudo();
  var remover = document.getElementById("remover");
  remover.style.display = "block";
}

function fecharTudo() {
  var cadastrarJS = document.getElementById("cadastrar");
  var consultar = document.getElementById("consultar");
  var remover = document.getElementById("remover");

  cadastrarJS.style.display = "none";
  consultar.style.display = "none";
  remover.style.display = "none";
}

function cadastrar() {
  let mesCad = document.getElementById("mesCadastrar").value;
  let carroCad = document.getElementById("carroCadastrar").value;
  mesEcarro[mesCad - 1].push(carroCad.toUpperCase());
  alert(`Cadastrado no mes ${mesCad}`);
  document.getElementById("mesCadastrar").value = "";
  document.getElementById("carroCadastrar").value = "";
  console.log(mesEcarro)
}

function remover() {
    
  let contadorRemover = 0;
  let carroRemover = document.getElementById("carroRemover").value;
  carroRemover = carroRemover.toUpperCase();

  console.log(carroRemover);
  for (mes = 0; mes <= 11; mes++) {
    for (let qntCarro = 0; qntCarro < mesEcarro[mes].length; qntCarro++) {
      if (mesEcarro[mes][qntCarro] == carroRemover) {
        
        contadorRemover = contadorRemover + 1;
        mesEcarro[mes].pop(qntCarro);
        console.log(mesEcarro);
      }
    }
  }
  document.getElementById("carroRemover").value = "";
  alert(`Foram removido(s) ${contadorRemover} ${carroRemover}`)
}

function consultarCarro() {
  let consCarro1 = document.getElementById("consCarro1");
  let consCarro2 = document.getElementById("consCarro2");
  let carroConsultar = document.getElementById("carroConsultar").value;
  document.getElementById("carroConsultar").value = "";
  carroConsultar = carroConsultar.toUpperCase();
  let contador = 0;
  console.log(carroConsultar);

  for (mes = 0; mes <12; mes++) {
    for (let qntCarro = 0; qntCarro < mesEcarro[mes].length; qntCarro++) {
      if (mesEcarro[mes][qntCarro] == carroConsultar) {
        if(contador == 0) {
          console.log("mes " + mes + 1);
          contador = contador + 1;
          consCarro1.textContent = `Foram vendido no mes ${mes+1}`;
      
        } else {
          contador = contador + 1;
          consCarro1.textContent =  consCarro1.textContent + ` ${mes+1}`
        }
      }
    }
  }
  consCarro2.textContent = `Existe ${contador} carros do medelo ${carroConsultar} `
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