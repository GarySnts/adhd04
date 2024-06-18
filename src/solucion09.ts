(function() {
const inputNumero = document.getElementById('txtNumero') as HTMLInputElement;
const verResultado = document.getElementById('resultado') as HTMLParagraphElement;

// Función para verificar si un número es primo
function esPrimo(numero: number): boolean {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }
    return true;
}

// Función para  mostrar 
function verificarPrimo() {
    const numero = parseInt(inputNumero.value, 10);

    if (isNaN(numero)) {
        verResultado.textContent = "El valor ingresado no es un número entero, por favor ingrese un número entero válido.";
    } else {
        verResultado.textContent = esPrimo(numero) ? `El número ${numero} es primo.` : `El número ${numero} no es primo.`;
    }
}

document.getElementById('verificarButton')?.addEventListener('click', verificarPrimo);

})();