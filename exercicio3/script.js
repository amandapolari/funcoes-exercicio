// EXERCÍCIO 3
// 📌 a) Criando 4 funções:
function somarNumeros(num1, num2) {
  const resultadoDaSoma = num1 + num2;
  return resultadoDaSoma;
}

function subtrairNumeros(num1, num2) {
  const resultadoDaSubtracao = num1 - num2;
  return resultadoDaSubtracao;
}

function multiplicarNumeros(num1, num2) {
  const resultadoDaMultiplicacao = num1 * num2;
  return resultadoDaMultiplicacao;
}

function dividirNumeros(num1, num2) {
  const resultadoDaDivisao = num1 / num2;
  return resultadoDaDivisao;
}

// 📌 b) Recebendo números do usuário:
const primeiroNumero = Number(prompt("Digite seu primeiro número:"));
const segundoNumero = Number(prompt("Digite seu segundo número:"));

// 📌 c) Invocando funções:
// 📌 d) Salvando em variáveis e (...):

const resultadoFinalDaSoma = somarNumeros(primeiroNumero, segundoNumero);
const resultadoFinalDaSubtracao = subtrairNumeros(primeiroNumero, segundoNumero);
const resultadoFinalDaMultiplicacao = multiplicarNumeros(primeiroNumero, segundoNumero);
const resultadoFinalDaDivisao = dividirNumeros(primeiroNumero, segundoNumero);

// 📌 d) (...)imprimindo no console:
console.log(`
O resultado da soma de ${primeiroNumero} com ${segundoNumero} é igual a: ${resultadoFinalDaSoma};
`);
console.log(`
O resultado da subtração de ${primeiroNumero} menos ${segundoNumero} é igual a: ${resultadoFinalDaSubtracao};
`);5
console.log(`
O resultado da multiplicação de ${primeiroNumero} vezes ${segundoNumero} é igual a: ${resultadoFinalDaMultiplicacao};
`);
console.log(`
O resultado da divisão de ${primeiroNumero} por ${segundoNumero} é igual a: ${resultadoFinalDaDivisao.toFixed(1)};
`);