/* function pedirNumero() {
    let num = parseInt(prompt('Ingrese un numero:'));
    imprimirNumero(num)
}
function imprimirNumero(num) {
    for(num >= 0; num < 100; num++) {
        console.log("Hola");
    }
}
pedirNumero(); */

function darNombreCompleto(nombre, apellido) {
    const nombreCompleto = `${nombre} ${apellido}`;
    return nombreCompleto; /*  el return finaliza la funcion
     ahí mismo, cualquier cosa debajo de return no sirve */
}
darNombreCompleto("Armando", "Zlatkowicz");
/* let operador1 = parseInt(prompt('Ingrese un numero:'));
let operador2 = parseInt(prompt('Ingrese otro numero:'));
function sumar(x, y) {
    return x + y;
}
const suma = sumar(operador1, operador2);
alert(suma); */

let userName = prompt('Ingrese su nombre:');
let userSurename = prompt('Ingrese su apellido:');
function fullNameFunction(name, surename) {
    return name + " " + surename;
}
const fullName = fullNameFunction(userName, userSurename);
alert(`Bienvenido ${fullName}`);

/*  Ya no se llama a la funcion directamente, 
se llama a la variables 

El operador => suplanta la palabra reservada function
Solo funciona en las funciones que se asignan dentro de una variable
*/
const suma = (a, b) =>{
    console.log(a+b);
    if(a > b || a == b) {
        console.log("A es mayor o igual a B ");
    } else {
        console.log("A es menor que B")
    }
}
suma(2, 2);

// Calculadora sin terminar 

/* function selector() {
    let accion = prompt(
        "Que desea hacer? \nA = SUMA_AVANZADA \nB = MULTIPLICACION_AVANZADA \nC = SECUENCIA \nFIN"
    ).toLowerCase();
    let bandera = true; 
    while(bandera) {
        switch(accion) {
            case "a": 
            cantNumeros = Number(prompt("Ingrese la cantidad de numeros a calcular:"));
                sumarAvanzado(cantNumeros);
                break;
            case "b": 
            cantNumeros = Number(prompt("Ingrese la cantidad de numeros a calcular:"));
                multiplicacionAvanzado(cantNumeros);
                break;
            case "c": 
            cantNumeros = Number(prompt("Ingrese la cantidad de numeros a calcular:"));
                secuenciaAvanzado(cantNumeros);
                break;
            case "fin":
                alert("Fin del caluclo. Gracias por venir")
                bandera = false;
                break;
            default:
                alert("Opcion incorrecta");
        }
        if(accion != "fin") {
            accion = prompt(
                "Que desea hacer? \nA = SUMA_AVANZADA \nB = MULTIPLICACION_AVANZADA \nC = SECUENCIA \nFIN"
            );
        }
    }
}
selector(); */