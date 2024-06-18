"use strict";
(function () {
    var _a;
    const inputTexto = document.getElementById('txtTexto');
    const verResultado = document.getElementById('resultado');
    // Función para mostrar el texto ingresado de forma inversa
    function mostrarInverso() {
        const texto = inputTexto.value;
        const longitud = texto.length; // Obtener la longitud del texto
        let textoInverso = '';
        for (let i = longitud - 1; i >= 0; i--) { // Recorrer el texto de atrás hacia adelante y construir el texto invertido
            textoInverso += texto[i];
        }
        verResultado.textContent = "El texto invertido es: " + textoInverso;
    }
    (_a = document.getElementById('btnMostrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mostrarInverso);
})();
