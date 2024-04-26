//4) Crie um programa que leia um valor inicial A e exiba a
//sequência de valores do cálculo de A! e o seu resultado.
//Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

var valorInicial = 5;


var resultado = 1;


var sequencia = valorInicial + "! = ";

for (var i = valorInicial; i > 0; i--) {
    resultado *= i;
    sequencia += i;
    if (i !== 1) {
        sequencia += " X ";
    }
}


console.log(sequencia + " = " + resultado);
