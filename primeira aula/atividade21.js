//Crie um programa que leia os valores A, B, C e exiba no
//console os números ordenados em ordem crescente e
//depois em ordem decrescente.

let a = 10;
let b = 5;
let c = 20;

if (a > b && a > c) {
    if (b > c) {
        console.log(a, b, c);
    } else {
        console.log(a, c, b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b, a, c);
    } else {
        console.log(b, c, a);
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(c, a, b);
    } else {
        console.log(c, b, a);
    }
} else {
    console.log(a, b, c);
}