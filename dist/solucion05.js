"use strict";
(function () {
    var _a;
    // Obtener referencias a los elementos de entrada y salida en el HTML
    const inputNumeroBase = document.getElementById('txtNumeroBase');
    const inputNumeroExponente = document.getElementById('txtNumeroExponente');
    const verResultado = document.getElementById('resultado');
    // Función para elevar un número a una potencia
    function elevarPotencia() {
        const base = parseFloat(inputNumeroBase.value);
        const exponente = parseFloat(inputNumeroExponente.value);
        if (isNaN(base) || isNaN(exponente)) {
            verResultado.textContent = "Uno o más valores ingresados no son números, por favor ingrese números válidos.";
        }
        else {
            const resultado = Math.pow(base, exponente);
            verResultado.textContent = `El numero ${base} elevado a la potencia ${exponente} es: ${resultado}`;
        }
    }
    (_a = document.getElementById('btnOperador')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', elevarPotencia);
})();
//usar el IIFE afecta la funcion elevarPotencia si lo quiero llamar con un onclick en el html en lugar de evento listener?
