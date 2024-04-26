//15) Crie um programa para controlar os saques de um caixa eletrônico que
//deve possuir algum mecanismo para decidir o número de notas de cada
//valor que deve ser disponibilizado para o cliente que realizou o saque.
//– O caixa eletrônico trabalhará com notas de R$ 100,00, R$ 50,00, R$
//20,00, R$ 10,00, R$ 5,00, R$ 2,00 e R$ 1,00. Não serão aceitos valores
//com casas decimais, caso o usuário informe uma valor com casa
//decimais o sistema deverá informar que o valor solicitado para o
//saque é inválido, e pedir que o usuário informe um novo valor.

const prompt = require('prompt-sync')();

const valorSaque = Number(prompt('Digite o valor do saque: '));     

let notas100 = 0;

let notas50 = 0;

let notas20 = 0;

let notas10 = 0;

let notas5 = 0;

let notas2 = 0;

let notas1 = 0;

if (valorSaque >= 100) {
    notas100 = Math.floor(valorSaque / 100);
    valorSaque = valorSaque % 100;
}

if (valorSaque >= 50) {
    notas50 = Math.floor(valorSaque / 50);
    valorSaque = valorSaque % 50;
}

if (valorSaque >= 20) {
    notas20 = Math.floor(valorSaque / 20);
    valorSaque = valorSaque % 20;
}

if (valorSaque >= 10) {
    notas10 = Math.floor(valorSaque / 10);
    valorSaque = valorSaque % 10;
}

if (valorSaque >= 5) {
    notas5 = Math.floor(valorSaque / 5);
    valorSaque = valorSaque % 5;
}

if (valorSaque >= 2) {
    notas2 = Math.floor(valorSaque / 2);
    valorSaque = valorSaque % 2;
}

if (valorSaque >= 1) {
    notas1 = Math.floor(valorSaque / 1);
    valorSaque = valorSaque % 1;
}

console.log(`Notas de 100: ${notas100}`);

console.log(`Notas de 50: ${notas50}`);

console.log(`Notas de 20: ${notas20}`);

console.log(`Notas de 10: ${notas10}`);

console.log(`Notas de 5: ${notas5}`);

console.log(`Notas de 2: ${notas2}`);

console.log(`Notas de 1: ${notas1}`);

