const inputBase = document.getElementById("numBase") as HTMLInputElement;
const inputAltura = document.getElementById("numAltura") as HTMLInputElement;
const verResultado = document.getElementById("resultado") as HTMLParagraphElement;

let base: number = 0;
let altura: number = 0;

function recibirValores2():number {
    let respuesta: number = 100;
    base = parseFloat(inputBase.value);
    altura = parseFloat(inputAltura.value);

    if(isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0 ){
        respuesta = 100;
    }
    return respuesta;
}

function areaTriangulo(){
    if(recibirValores2() == 100){
        verResultado.textContent = "Los valores son incorrectos, verifique que sean números positivos";
    }else{
        const area = (base * altura) / 2;
        verResultado.textContent = "El area deñl triangulo es: " + area;
    }
}