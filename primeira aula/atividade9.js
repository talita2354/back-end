//9) Crie um programa que leia a idade de uma pessoa expressa
//em dias e mostre-a expressa em anos, meses e dias.

let idadeEmDias = 7020; 

let anos = Math.floor(idadeEmDias / 365);
let meses = Math.floor((idadeEmDias % 365) / 30);
let dias = idadeEmDias % 30;

console.log('Idade:',anos,'anos', meses,'meses e', dias,'dias.');