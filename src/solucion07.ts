(function() {
const inputNumero = document.getElementById('numFactorial') as HTMLInputElement;
const verResultado = document.getElementById('resultado') as HTMLParagraphElement;

// Función para calcular el factorial de un número
function calcularFactorial() {

    const numero = parseFloat(inputNumero.value);

    if (isNaN(numero) || numero < 0) {
        verResultado.textContent = "Por favor, ingrese un número entero positivo.";
        return;
    }

    // Calcular el factorial
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar el resultado
    verResultado.textContent = `El factorial de ${numero} es: ${factorial}`;
}
document.getElementById('btnCalcular')?.addEventListener('click', calcularFactorial);
})();