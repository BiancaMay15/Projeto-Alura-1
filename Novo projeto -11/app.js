alert("Bem-vindo ao nosso site!");

let nome = "Lua";
let idade = 21;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
//Se o nome for Lua
numero = prompt(`Seu nome é ${nome}? /n 1-Sim /n 2-Não`)
if (numero == 1) {
  alert(`${idade},${numeroDeVendas},${saldoDisponivel}`);
} else if (numero == 2) {
    nome = prompt("Digite o seu nome");
    idade = prompt("Digite a sua idade");
    if (idade >= 18 && idade <= 89) {
        alert("Pode tirar a habilitação!");
    }  else if (idade >= 90) {
        alert("Vc é idoso... ;-;") } 
        else { 
            alert("Não pode tirar a habilitação") }
    } else {
        alert("Não existe essa opção >:(")
}

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);