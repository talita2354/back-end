//13) Tendo como dados de entrada dois valores numéricos digitados pelo
//usuário, crie um programa para uma calculadora com as seguintes
//operações: soma, subtração, multiplicação e divisão. Após a escolha da
//operação exiba no console o resultado.


const prompt = require('prompt-sync')();

const num1 =Number(prompt('Digite o primeiro número: '));

const num2 = Number(prompt('Digite o segundo número: '));

const operacao = Number(prompt('Digite a operação desejada: '));

if (operacao === '+') {
    console.log(Number(num1) + Number(num2));
} else if (operacao === '-') {

    console.log(Number(num1) - Number(num2));
} else if (operacao === '*') {


    console.log(Number(num1) * Number(num2));
} else if (operacao === '/') {
    console.log(Number(num1) / Number(num2));
} else {
    console.log('Operação inválida');
}


