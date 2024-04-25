//5) Crie um programa que exiba na tela a tabuada do número
//digitado pelo usuário.
 
const promptSync = require('prompt-sync');
const prompt = promptSync(); 

const y =Number(prompt("Digite um número para ver sua tabuada:"));





for ( i = 1; i <= 10; i++){
    total= y * i
    console.log(y ,'x',i, '=',total)
}