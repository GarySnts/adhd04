(function() {
    const inputNumero1 = document.getElementById('txtNumero1') as HTMLInputElement;
    const inputNumero2 = document.getElementById('txtNumero2') as HTMLInputElement;
    const inputNumero3 = document.getElementById('txtNumero3') as HTMLInputElement;
    const verResultado = document.getElementById('resultado') as HTMLParagraphElement;

    function encontrarMayorMenor() {
        const numero1 = parseFloat(inputNumero1.value);
        const numero2 = parseFloat(inputNumero2.value);
        const numero3 = parseFloat(inputNumero3.value);

        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            verResultado.textContent = "Uno o más valores ingresados no son números, por favor ingrese números válidos.";
        } else {
            const mayor = Math.max(numero1, numero2, numero3);
            const menor = Math.min(numero1, numero2, numero3);

            verResultado.textContent = `El mayor número es: ${mayor} y el menor número es: ${menor}`;
        }
    }

    document.getElementById('btnEncontrar')?.addEventListener('click', encontrarMayorMenor);
})();
