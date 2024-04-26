//14) Tendo como dados de entrada o peso (em quilogramas) e a altura (em
    //metros) de uma pessoa, crie um programa que calcule o Índice de
    //Massa Corporal (IMC) dessa pessoa.
    //Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
    //Classifique o IMC da seguinte forma:
    //- IMC < 18,5 Kg/m2: Abaixo do Peso
    //- IMC >= 18,5 Kg/m2 e < 24,9 Kg/m2: Peso Ideal
    //- IMC >= 25 Kg/m2 e < 29,9 Kg/m2: Excesso de Peso
    //- IMC >= 30 Kg/m2: Obesidade

    const prompt = require('prompt-sync')();

    const peso = Number(prompt('Qual o seu peso? '));
    const altura = Number(prompt('Qual a sua altura? '));

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log('Abaixo do Peso');
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log('Peso Ideal');
    } else if (imc >= 25 && imc < 29.9) {
        console.log('Excesso de Peso');
    } else {
        console.log('Obesidade');
    }
    