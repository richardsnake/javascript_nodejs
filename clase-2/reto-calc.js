const prompt = require("prompt-sync")();

function sumar(num1, num2){
    return num1+num2;
}

function restar(num1, num2){
    return num1-num2;
}

function multiplicar(num1, num2){
    return num1*num2;
}

function dividir(num1, num2){
    return num1/num2;
}

function modulo(num1, num2){
    return num1%num2;
}

function potencia(num1, num2){
    return num1**num2;
}

var num1 = prompt("Ingrese un numero 1: ");
var num2 = prompt("Ingrese un numero 2: ");
var operacion = prompt("Ingrese operacion (+,-,*,/,%,**): ");
num1 = Number(num1);
num2 = Number(num2);
var resultado = 0
if(operacion == '+')
    resultado = sumar(num1, num2);
else if(operacion == '-')
    resultado = restar(num1, num2);
else if(operacion == '*')
    resultado = multiplicar(num1, num2);
else if(operacion == '/')
    resultado = dividir(num1, num2);
else if(operacion == '%')
    resultado = modulo(num1, num2);
else if(operacion == '**')
    resultado = potencia(num1, num2);
else
    console.log("operacion no reconocida")
console.log("El resutado de la operacion "+operacion+" es: "+resultado);

