//10) Faça um programa que leia a largura e o comprimento de um terreno
//retangular, calculando e mostrando a sua área em m2 (largura x
//comprimento). O programa também deve mostrar a classificação desse
//terreno, de acordo com a lista abaixo:
//- Abaixo de 100m2 = TERRENO POPULAR
//- Entre 100m2 e 500m2 = TERRENO MASTER
//- Acima de 500m2 = TERRENO VIP

const prompt = require('prompt-sync')();

const largura = Number(prompt('Qual a largura do terreno? '));

const comprimento = Number(prompt('Qual o comprimento do terreno? '));

const area = largura * comprimento;

if (area < 100) {   
    console.log('Terreno Popular');
} else if (area >= 100 && area < 500) {
    console.log('Terreno Master');
} else {
    console.log('Terreno VIP');
}
