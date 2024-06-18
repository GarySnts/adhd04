"use strict";
(function () {
    var _a;
    const inputNumero = document.getElementById('numPerfecto');
    const verResultado = document.getElementById('resultado');
    // Función para verificar si un número es perfecto
    function esNumeroPerfecto(numero) {
        if (numero <= 0) {
            return false;
        }
        let sumaDivisores = 0;
        // Encuentra divisores y los suma
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }
        // Determina si la suma de los divisores es igual al número
        return sumaDivisores === numero;
    }
    // Función para verificar y mostrar si el número ingresado es perfecto
    function verificarNumeroPerfecto() {
        const numero = parseInt(inputNumero.value);
        // Verificar si es un número perfecto y mostrar el resultado
        if (esNumeroPerfecto(numero)) {
            verResultado.textContent = `${numero} es un número perfecto.`;
        }
        else {
            verResultado.textContent = `${numero} no es un número perfecto.`;
        }
    }
    (_a = document.getElementById('btnCalcular')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', verificarNumeroPerfecto);
})();
