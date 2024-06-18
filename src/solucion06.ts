(function() { 
const inputTexto = document.getElementById('txtTexto') as HTMLInputElement;
const verResultado = document.getElementById('resultado') as HTMLParagraphElement;

// Función para mostrar el texto ingresado de forma inversa
function mostrarInverso() {
    const texto = inputTexto.value;
    const longitud = texto.length; // Obtener la longitud del texto

    let textoInverso = '';

    for (let i = longitud - 1; i >= 0; i--) {   // Recorrer el texto de atrás hacia adelante y construir el texto invertido
        textoInverso += texto[i];
    }

    verResultado.textContent = "El texto invertido es: " + textoInverso;
}

document.getElementById('btnMostrar')?.addEventListener('click', mostrarInverso);
})();