"use strict";
const inputBase = document.getElementById("numBase");
const inputAltura = document.getElementById("numAltura");
const verResultado2 = document.getElementById("resultado");
let base = 0;
let altura = 0;
function recibirValores2() {
    let respuesta = 100;
    base = parseFloat(inputBase.value);
    altura = parseFloat(inputAltura.value);
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        respuesta = 100;
    }
    return respuesta;
}
function areaTriangulo() {
    if (recibirValores2() == 100) {
        verResultado2.textContent = "Los valores son incorrectos, verifique que sean números positivos";
    }
    else {
        const area = (base * altura) / 2;
        verResultado2.textContent = "El area deñl triangulo es: " + area + " cm al cuadrado";
    }
}
//llamar con un onClick en html
