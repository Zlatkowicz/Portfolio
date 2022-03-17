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

const suma = function(a, b){
    console.log(a+b);
}
suma(2, 2);