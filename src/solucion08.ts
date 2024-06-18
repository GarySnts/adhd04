(function() {
const inputNumero = document.getElementById('numPerfecto') as HTMLInputElement;
const verResultado = document.getElementById('resultado') as HTMLParagraphElement;

// Función para verificar si un número es perfecto
function esNumeroPerfecto(numero: number): boolean {
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
    } else {
        verResultado.textContent = `${numero} no es un número perfecto.`;
    }
}

document.getElementById('btnCalcular')?.addEventListener('click', verificarNumeroPerfecto);
})();