"use strict";
const inputNumero1 = document.getElementById('txtNumero1');
const inputNumero2 = document.getElementById('txtNumero2');
const inputNumero3 = document.getElementById('txtNumero3');
const verResultado = document.getElementById('resultado');
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
function recibirValores() {
    let respuesta = 0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    numero3 = parseFloat(inputNumero3.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100;
    }
    return respuesta;
}
function calcularPromedio() {
    if (recibirValores() == 100) {
        verResultado.textContent = "Los valores son incorrectos, verifique que sean números";
    }
    else {
        const promedio = (numero1 + numero2 + numero3) / 3;
        verResultado.textContent = "El promedio de los 3 datos es: " + promedio;
    }
}
