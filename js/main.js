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