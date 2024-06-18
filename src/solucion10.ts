(function() {
const inputTexto = document.getElementById('txtTexto') as HTMLInputElement;
const verResultado = document.getElementById('resultado') as HTMLParagraphElement;

// Función para contar las vocales en un texto
function contarVocales(texto: string): number {
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

document.getElementById('contarButton')?.addEventListener('click', mostrarConteoVocales);
})();