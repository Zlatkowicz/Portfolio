// Datos del usuario

let userName, surename, age, nationality;
userName = prompt('Ingrese su nombre');
surename = prompt('Ingrese su apellido');
age = prompt('Ingrese su edad');

// Bucle que verifica que sea un numero
while(isNaN(age)) {
    age = prompt('Por favor ingrese un numero');
}
nationality = prompt('Ingrese su nacionalidad');

// Condicional que verifica strings vacios 
if(userName == "" || surename == "" || nationality == "") {
    alert('Error: Faltaron datos por completar');
}

// Array de datos
let userDats = [];

// Funcion para datos del usuario
function userData(userName, surename, age, nationality) {
    this.userName = userName;
    this.surename = surename;
    this.age = age;
    this.nationality = nationality;

    userDats.push(userName, surename, age, nationality);
}

userData(userName, surename, age, nationality);
console.log(userDats.length);

// Objeto de redes sociales
let userSocialMedia = {
    twitter:'@ialkaild',
    reddit: 'ialkaild', 
    discord: 'UnLondon',
}
console.log(userSocialMedia.twitter);