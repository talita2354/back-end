//Crie um programa que efetue a soma de todos os números
//ímpares que são múltiplos de três e que se encontram no
//conjunto dos números de 1 até 100.

let soma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 2 !== 0) {
        soma += i;
    }
}
console.log("a soma total é",soma);