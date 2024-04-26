//8) Crie um programa que leia os dados de um aluno: nome,
//matrícula, disciplina, nota. Se a nota do aluno for maior ou
//igual a 60 exiba no console “Aprovado”, se a nota do aluno
//for menor que 60 porém maior ou igual a 50 exiba no
//console “Em recuperação” e se a nota do aluno for menor
//que 50 exiba no console “Reprovado”.

const prompt = require('prompt-sync')();

const nome =prompt('Qual o seu nome? ');
const matricula = Number(prompt('Qual a sua matricula? '));
const disciplina = prompt('Qual a disciplina? ');

const nota = Number(prompt('Qual a nota? '));

if (nota >= 60) {
    console.log('Aprovado');
} else if (nota >= 50) {
    console.log('Em recuperação');
} else {

    console.log('Reprovado');
}   






