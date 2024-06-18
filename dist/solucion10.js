"use strict";
(function () {
    var _a;
    const inputTexto = document.getElementById('txtTexto');
    const verResultado = document.getElementById('resultado');
    // Función para contar las vocales en un texto
    function contarVocales(texto) {
        const vocales = 'aeiouAEIOU';
        let contador = 0;
        for (let char of texto) {
            if (vocales.includes(char)) {
                contador++;
            }
        }
        return contador;
    }
    // Función para mostrar 
    function mostrarConteoVocales() {
        const texto = inputTexto.value;
        const numeroVocales = contarVocales(texto);
        verResultado.textContent = `El texto ingresado contiene ${numeroVocales} vocales.`;
    }
    (_a = document.getElementById('contarButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mostrarConteoVocales);
})();
