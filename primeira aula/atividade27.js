//12) Tendo como dados de entrada a altura e o sexo de uma pessoa, crie um
//programa que calcule seu peso ideal, utilizando as seguintes fórmulas:
//para homens: (72.7 * h) - 58; para mulheres: (62.1 * h) - 44.7.

const prompt = require('prompt-sync')();

const nome = prompt('Qual o seu nome? ');

const altura = Number(prompt('Qual a sua altura? '));

const sexo = prompt('Qual o seu sexo? ');

let pesoIdeal = 0;

if (sexo == 'masculino') {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo == 'feminino') {    
    pesoIdeal = (62.1 * altura) - 44.7;
}

console.log(`Olá ${nome}, seu peso ideal é: ${pesoIdeal} kg.`);
