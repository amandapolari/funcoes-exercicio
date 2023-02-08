// EXERCÍCIO 1:
// a)
// // (FORMA 1) => Utilizando prompt para perguntar o nome do usuário:
// const nome = prompt('Qual é o seu nome?');

// (FORMA 2) => Nome salvo em uma variável
// const nome = 'Amanda';

//(CÓDIGO PARA AS DUAS FORMAS):
// function imprimirNome(nome) {
//     console.log('Olá,', nome);
// }
// imprimirNome(nome);

// b)
// const numero1 = 1;
// const numero2 = 2;
// const numero3 = 3;
// const numero4 = 4;
// const numero5 = 5;
// const numero6 = 6;
// const numero7 = 7;
// const numero8 = 8;
// const numero9 = 9;
// const numero10 = 10;

// function multiplicarNumeros(numero) {
//     console.log(`
//     1 * ${numero} = ${1 * numero};
//     2 * ${numero} = ${2 * numero};
//     3 * ${numero} = ${3 * numero};
//     4 * ${numero} = ${4 * numero};
//     5 * ${numero} = ${5 * numero};
//     6 * ${numero} = ${6 * numero};
//     7 * ${numero} = ${7 * numero};
//     8 * ${numero} = ${8 * numero};
//     9 * ${numero} = ${9 * numero};
//     10 * ${numero} = ${10 * numero};
//     `)
// }

//  multiplicarNumeros(numero1);
//  multiplicarNumeros(numero2);
//  multiplicarNumeros(numero3);
//  multiplicarNumeros(numero4);
//  multiplicarNumeros(numero5);
//  multiplicarNumeros(numero6);
//  multiplicarNumeros(numero7);
//  multiplicarNumeros(numero8);
//  multiplicarNumeros(numero9);
//  multiplicarNumeros(numero10);

// c)
// c) -> a)
const imprimirNome = (nome) => {
    const frase = `Olá ${nome}!`
    console.log(frase);
}
const nome = 'Amanda';
imprimirNome(nome);

// c) -> b)
const numero1 = 1;
const numero2 = 2;
const numero3 = 3;
const numero4 = 4;
const numero5 = 5;
const numero6 = 6;
const numero7 = 7;
const numero8 = 8;
const numero9 = 9;
const numero10 = 10;

const multiplicarNumerosUsandoArrowFunction = (numero) => {
    console.log(`
    1 * ${numero} = ${1 * numero};
    2 * ${numero} = ${2 * numero};
    3 * ${numero} = ${3 * numero};
    4 * ${numero} = ${4 * numero};
    5 * ${numero} = ${5 * numero};
    6 * ${numero} = ${6 * numero};
    7 * ${numero} = ${7 * numero};
    8 * ${numero} = ${8 * numero};
    9 * ${numero} = ${9 * numero};
    10 * ${numero} = ${10 * numero};
    `)
}

 multiplicarNumerosUsandoArrowFunction(numero1);
 multiplicarNumerosUsandoArrowFunction(numero2);
 multiplicarNumerosUsandoArrowFunction(numero3);
 multiplicarNumerosUsandoArrowFunction(numero4);
 multiplicarNumerosUsandoArrowFunction(numero5);
 multiplicarNumerosUsandoArrowFunction(numero6);
 multiplicarNumerosUsandoArrowFunction(numero7);
 multiplicarNumerosUsandoArrowFunction(numero8);
 multiplicarNumerosUsandoArrowFunction(numero9);
 multiplicarNumerosUsandoArrowFunction(numero10);