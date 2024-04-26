//9) Crie um programa que leia a idade de 10 pessoas, exibindo
//ao final do programa:
//- Qual é a média de idade do grupo
//- Quantas pessoas tem mais de 20 anos
//- Quantas pessoas tem menos de 10 anos
//- Qual foi a maior idade lida
//- Qual foi a menor idade lida

const prompt = require('prompt-sync')();

const idade1 = Number(prompt('Qual a sua idade? '));

const idade2 = Number(prompt('Qual a sua idade? '));

const idade3 = Number(prompt('Qual a sua idade? '));

const idade4 = Number(prompt('Qual a sua idade? '));

const idade5 = Number(prompt('Qual a sua idade? '));

const idade6 = Number(prompt('Qual a sua idade? '));

const idade7 = Number(prompt('Qual a sua idade? '));     

const idade8 = Number(prompt('Qual a sua idade? '));

const idade9 = Number(prompt('Qual a sua idade? '));

const idade10 =Number(prompt('Qual a sua idade? '));

const media = (idade1 + idade2 + idade3 + idade4 + idade5 + idade6 + idade7 + idade8 + idade9 + idade10) / 10;

console.log('A média das idades é: ' + media);

if (idade1 > 20) {
    console.log('Há mais de 20 anos');
}

if (idade2 > 20) {
    console.log('Há mais de 20 anos');
}

if (idade3 > 20) {
    console.log('Há mais de 20 anos');
}


if (idade4 > 20) {
    console.log('Há mais de 20 anos');
}

if (idade5 > 20) {
    console.log('Há mais de 20 anos');
}


if (idade6 > 20) {
    console.log('Há mais de 20 anos');
}

if (idade7 > 20) {
    console.log('Há mais de 20 anos');
}

if (idade8 > 20) {
    console.log('Há mais de 20 anos');
}


if (idade9 > 20) {
    console.log('Há mais de 20 anos');
}

if (idade10 > 20) {
    console.log('Há mais de 20 anos');
}

if (idade1 < 10) {
    console.log('Há menos de 10 anos');
}

if (idade2 < 10) {
    console.log('Há menos de 10 anos');
}

if (idade3 < 10) {
    console.log('Há menos de 10 anos');
}

if (idade4 < 10) {
    console.log('Há menos de 10 anos');
}

if (idade5 < 10) {
    console.log('Há menos de 10 anos');
}

if (idade6 < 10) {
    console.log('Há menos de 10 anos');
}

if (idade7 < 10) {
    console.log('Há menos de 10 anos');
}




