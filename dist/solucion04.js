"use strict";
(function () {
    var _a;
    const inputNumero1 = document.getElementById('txtNumero1');
    const inputNumero2 = document.getElementById('txtNumero2');
    const inputNumero3 = document.getElementById('txtNumero3');
    const verResultado = document.getElementById('resultado');
    function encontrarMayorMenor() {
        const numero1 = parseFloat(inputNumero1.value);
        const numero2 = parseFloat(inputNumero2.value);
        const numero3 = parseFloat(inputNumero3.value);
        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            verResultado.textContent = "Uno o más valores ingresados no son números, por favor ingrese números válidos.";
        }
        else {
            const mayor = Math.max(numero1, numero2, numero3);
            const menor = Math.min(numero1, numero2, numero3);
            verResultado.textContent = `El mayor número es: ${mayor} y el menor número es: ${menor}`;
        }
    }
    (_a = document.getElementById('btnEncontrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', encontrarMayorMenor);
})();
