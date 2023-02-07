// EXERCÍCIO 2
// 📌 a)
// (FORMA 1) => Números chumbados em uma variável:
// const primeiroNumero = 2;
// const segundoNumero = 5;

// (FORMA 2) => Recebendo o número do usuário
// const primeiroNumero = Number(prompt('Digite seu primeiro número:'));
// const segundoNumero = Number(prompt('Digite seu segundo número:'));

// (CÓDIGO PARA AS DUAS FORMAS:)
// function somarNumeros(num1, num2) {
//     const resultadoDaSoma = num1 + num2;
//     return resultadoDaSoma;
// }

// const resultadoFinalDaSoma = somarNumeros(primeiroNumero, segundoNumero);
// console.log(`
// O resultado da soma é igual a ${resultadoFinalDaSoma}
// `);

//=============>

// 📌 b)
// (FORMA 1) => Números chumbados em uma variável
// const primeiroNumero = 2;
// const segundoNumero = 6;

// (FORMA 2) => Recebendo o número do usuário
// const primeiroNumero = Number(prompt('Digite seu primeiro número:'));
// const segundoNumero = Number(prompt('Digite seu segundo número:'));

// (CÓDIGO PARA AS DUAS FORMAS:)
// function verificarMaior(num1, num2){
//     const primeiroMaiorQueSegundo = num1 > num2;
//     return primeiroMaiorQueSegundo;
// }
// const resultadoFinal = verificarMaior(primeiroNumero,segundoNumero);
// console.log(`
// O primeiro número é maior que o segundo? ${resultadoFinal}
// `);

// 📌 c)
// (FORMA 1) => Números chumbados em uma variável
// const numero = 4;

// (FORMA 2) => Recebendo o número do usuário
// const numero = Number(prompt('Digite um número:'));

// (CÓDIGO PARA AS DUAS FORMAS:)
// function verificaSeEhPar(num) {
//     const ehPar = (num % 2) === 0;
//     return ehPar;
// }
// const resultadoFinal = verificaSeEhPar(numero);
// console.log(`
// O número ${numero} é par? ${resultadoFinal}
// `);

// 📌 d)
// (FORMA 1) => Números chumbados em uma variável
// const salario = 3500;

// (FORMA 2) => Recebendo o número do usuário
// const salario = Number(prompt('Digite o valor do seu salário'));

// (CÓDIGO PARA AS DUAS FORMAS:)
// function descontarInss(salario) {
//     const porcentDeDescontoInss = 0.1;
//     const valorDoDescontoInss = salario * porcentDeDescontoInss;
//     const salarioLiquido = salario - valorDoDescontoInss;
//     return salarioLiquido;
// }
// const resultadoFinal = descontarInss(salario);
// console.log(`
// O salário líquido é igual a: R$ ${resultadoFinal}
// `)