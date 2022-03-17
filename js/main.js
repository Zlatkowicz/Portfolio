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