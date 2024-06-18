"use strict";
var _a;
const inputNumero = document.getElementById('numPar');
const verResultado3 = document.getElementById('resultado');
// Función para determinar si el número es par o impar
function calcularParImpar() {
    const numero = parseFloat(inputNumero.value);
    if (isNaN(numero)) {
        verResultado3.textContent = "El valor ingresado no es un número, por favor ingrese un número válido.";
    }
    else {
        if (numero % 2 === 0) {
            verResultado3.textContent = "El número " + numero + " es par.";
        }
        else {
            verResultado3.textContent = "El número " + numero + " es impar.";
        }
    }
}
// Añadir un event listener para llamar a la función determinarParImpar cuando sea necesario
(_a = document.getElementById('btnParImpar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', calcularParImpar);
