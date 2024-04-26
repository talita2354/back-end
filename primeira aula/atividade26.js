//11) Crie um programa que calcule o que deve ser pago por um produto,
//considerando o preço normal de etiqueta e a escolha da condição de
//pagamento. Utilize os códigos da tabela a seguir para ler qual a
//condição de pagamento escolhida e efetuar o cálculo adequado.
//Código – Condição de Pagamento
//1 – À vista em dinheiro ou cheque, recebe 10% de desconto
//2 – À vista no cartão de crédito, recebe 15% de desconto
//3 – Em duas vezes, preço normal de etiqueta sem juros
//4 – Em duas vezes, preço normal de etiqueta mais juros de 10%

const prompt = require('prompt-sync')();

const preco = Number(prompt('Qual o preço do produto? '));  

const condicao = prompt('Qual a condição de pagamento? ');

if (condicao == 1) {

    const desconto = preco - (preco * 0.1);

    console.log('O valor do produto com desconto é: ' + desconto);

} else if (condicao == 2) {
    
    const desconto = preco - (preco * 0.15);
    
    console.log('O valor do produto com desconto é: ' + desconto);
    
} else if (condicao == 3) {
    
    console.log('O valor do produto sem desconto é: ' + preco);
    
} else if (condicao == 4) {


    const juros = preco + (preco * 0.1);
    
    console.log('O valor do produto com juros é: ' + juros);
    
} else {
    
    console.log('Condição de pagamento inválida');
    
}

