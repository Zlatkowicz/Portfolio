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