//7) Crie um programa que leia dois valores inteiros A e B se os
//valores forem iguais deverá se somar os dois, caso contrário
//multiplique A por B. Ao final de qualquer um dos cálculos
//deve-se atribuir o resultado para uma variável C e mostrar
//seu conteúdo no console.

var a = 10;
var b = 20;
var c = 0;

if (a == b) {
    c = a + b;
} else {
    c = a * b;
}

console.log(c);
