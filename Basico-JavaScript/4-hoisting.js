// Declaro variable
var miNombre;
// inicializo variable 
minombre = "Camilo";

// es mas comun declarar e iniciarlas en una misma linea de codigo
var miApellido = "Luna";

// ahora hoisting es como un error donde primero utilizo una variable, es decir sin haberla inicializado "Hoisting en las variables"
var miApodo;
console.log(miApodo);
miApodo = "Moon";

// "Hoisting en funciones"
hey();
function hey(){
    console.log("Hola "+ miNombre);
}
var miNombre = "Camilo-Luna"