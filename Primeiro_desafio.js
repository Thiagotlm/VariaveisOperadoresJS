/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 vaiáveis. Sendo elas:
    1-Preço do combustível;
    2-Gasto médio de combustível do carro por KM;
    3-Distância em km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

/*entrada das declarações*/
const precoCombustivel = 3.69;
const kmPorLitros = 13;
const distanciakm = 1600;

/*resolução */
const litrosConsumidos = distanciakm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log('O valor gasto nesta viagem é de: R$', valorGasto.toFixed(2));