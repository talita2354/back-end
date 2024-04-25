//11) Crie um programa que leia o tempo de duração de uma
//atividade em segundos e mostre-o expresso em horas,
//minutos e segundos.

let segundosTotal = 10000; 

let horas = Math.floor(segundosTotal / 3600);
let minutos = Math.floor((segundosTotal % 3600) / 60);
let segundos = segundosTotal % 60;

console.log('Tempo total:', horas,'horas', minutos,'minutos', 'e' ,segundos, 'segundos.');
