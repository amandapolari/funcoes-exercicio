// EXERCÍCIO 2
// 📌 a)
// (FORMA 1) => Sem criar variáveis para os números:
function somarNumeros(num1, num2) {
    const resultadoSoma = num1 + num2;
    console.log(`
    O resultado da soma de ${num1} com ${num2} é igual a: ${resultadoSoma}
    `);
}
somarNumeros(2,7);

// (TREINANDO OUTRAS FORMAS)
// (FORMA 2) => Números chumbados em uma variável:
// const primeiroNumero = 2;
// const segundoNumero = 5;

// (FORMA 3) => Recebendo o número do usuário
// const primeiroNumero = Number(prompt('Digite seu primeiro número:'));
// const segundoNumero = Number(prompt('Digite seu segundo número:'));

// (CÓDIGO PARA AS FORMAS 2 e 3)
// function somarNumeros(num1, num2) {
//     const resultadoDaSoma = num1 + num2;
//     return resultadoDaSoma;
// }
// const resultadoFinalDaSoma = somarNumeros(primeiroNumero, segundoNumero);
// console.log(`
// O resultado da soma é igual a ${resultadoFinalDaSoma}
// `);

// 📌 b)
// (FORMA 1) => Sem criar variáveis para os números:
function primeiroEhMaiorOuIgualAoSegundo(num1, num2) {
    const resultadoDaComparacao = num1 > num2;
    console.log(`
    O número ${num1} é maior ou igual ao número ${num2}? ${resultadoDaComparacao}
    `)
}
primeiroEhMaiorOuIgualAoSegundo(6,1);

// (TREINANDO OUTRAS FORMAS)
// (FORMA 2) => Números chumbados em uma variável
// const primeiroNumero = 2;
// const segundoNumero = 6;

// (FORMA 3) => Recebendo o número do usuário
// const primeiroNumero = Number(prompt('Digite seu primeiro número:'));
// const segundoNumero = Number(prompt('Digite seu segundo número:'));

// (CÓDIGO PARA AS FORMAS 2 e 3)
// function verificarMaior(num1, num2){
//     const primeiroMaiorQueSegundo = num1 > num2;
//     return primeiroMaiorQueSegundo;
// }
// const resultadoFinal = verificarMaior(primeiroNumero,segundoNumero);
// console.log(`
// O primeiro número é maior que o segundo? ${resultadoFinal}
// `);

// 📌 c)
// (FORMA 1) => Sem criar variáveis para os números:
function verificarSeEhPar(num) {
    const resultadoDaComparacao = (num % 2) === 0;
    console.log(`
    O número ${num} é par? ${resultadoDaComparacao}
    `)
}
verificarSeEhPar(3);

// (TREINANDO OUTRAS FORMAS)
// (FORMA 2) => Números chumbados em uma variável
// const numero = 4;

// (FORMA 3) => Recebendo o número do usuário
// const numero = Number(prompt('Digite um número:'));

// (CÓDIGO PARA AS FORMAS 2 e 3)
// function verificaSeEhPar(num) {
//     const ehPar = (num % 2) === 0;
//     return ehPar;
// }
// const resultadoFinal = verificaSeEhPar(numero);
// console.log(`
// O número ${numero} é par? ${resultadoFinal}
// `);

// 📌 d)
// (FORMA 1) => Sem criar variáveis para os números:
function calcularSalarioLiquido(salarioBruto) {
    const desconto = salarioBruto * 0.1;
    const salarioLiquido = salarioBruto - desconto;
    return salarioLiquido;
}
const meuSalarioLiquido = calcularSalarioLiquido(3000);
console.log(`
    O salário líquido com desconto é igual a R$ ${meuSalarioLiquido}
`)

// (TREINANDO OUTRAS FORMAS)
// (FORMA 2) => Números chumbados em uma variável
// const salario = 3500;

// (FORMA 3) => Recebendo o número do usuário
// const salario = Number(prompt('Digite o valor do seu salário'));

// (CÓDIGO PARA AS FORMAS 2 e 3)
// function calcularSalarioLiquido(salario) {
//     const porcentDeDescontoInss = 0.1;
//     const valorDoDescontoInss = salario * porcentDeDescontoInss;
//     const salarioLiquido = salario - valorDoDescontoInss;
//     return salarioLiquido;
// }
// const resultadoFinal = calcularSalarioLiquido(salario);
// console.log(`
// O salário líquido é igual a: R$ ${resultadoFinal}
// `)