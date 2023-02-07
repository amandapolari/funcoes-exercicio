// EXERCÍCIO 3
const primeiroNumero = Number(prompt("Digite seu primeiro número:"));
const segundoNumero = Number(prompt("Digite seu segundo número:"));

function somarNumeros(num1, num2) {
  const resultadoDaSoma = num1 + num2;
  return resultadoDaSoma;
}
const resultadoFinalDaSoma = somarNumeros(primeiroNumero, segundoNumero);
console.log(`
O resultado da soma de ${primeiroNumero} com ${segundoNumero} é igual a: ${resultadoFinalDaSoma};
`);

function subtrairNumeros(num1, num2) {
  const resultadoDaSubtracao = num1 - num2;
  return resultadoDaSubtracao;
}
const resultadoFinalDaSubtracao = subtrairNumeros(primeiroNumero, segundoNumero);
console.log(`
O resultado da subtração de ${primeiroNumero} menos ${segundoNumero} é igual a: ${resultadoFinalDaSubtracao};
`);

function multiplicarNumeros(num1, num2) {
  const resultadoDaMultiplicacao = num1 * num2;
  return resultadoDaMultiplicacao;
}
const resultadoFinalDaMultiplicacao = multiplicarNumeros(primeiroNumero, segundoNumero);
console.log(`
O resultado da multiplicação de ${primeiroNumero} menos ${segundoNumero} é igual a: ${resultadoFinalDaMultiplicacao};
`);

function dividirNumeros(num1, num2) {
  const resultadoDaDivisao = num1 / num2;
  return resultadoDaDivisao;
}
const resultadoFinalDaDivisao = dividirNumeros(primeiroNumero, segundoNumero);
console.log(`
O resultado da divisão de ${primeiroNumero} por ${segundoNumero} é igual a: ${resultadoFinalDaDivisao.toFixed(1)};
`);
