const inputNumero1 = document.getElementById('txtNumero1') as HTMLInputElement;
const inputNumero2 = document.getElementById('txtNumero2') as HTMLInputElement;
const inputNumero3 = document.getElementById('txtNumero3') as HTMLInputElement;
const verResultado = document.getElementById('resultado') as HTMLParagraphElement;

let numero1: number = 0;
let numero2: number = 0;
let numero3: number = 0;

function recibirValores():number{
    let respuesta: number = 0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    numero3 = parseFloat(inputNumero3.value);
    if(isNaN(numero1)||isNaN(numero2)){
        respuesta = 100;       
    }
    return respuesta;
}

function calcularPromedio(){
    if (recibirValores()==100){
        verResultado.textContent = "Los valores son incorrectos, verifique que sean números";
    }else{
        const promedio = (numero1 + numero2 + numero3) / 3;
        verResultado.textContent = "El promedio de los 3 datos es: " + promedio;
    }
}