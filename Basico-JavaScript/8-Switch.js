// forma de generar condiciones por casos 
// Ejemplo 
var numero = 100;
function queSoy(numero){
    switch(numero){
        case 1:
            console.log("Soy uno");
            break;
        case 10:
            console.log("Soy un Diez");
            break;
        case 100:
            console.log("Soy un Cien");
            break;
        default:
            console.log("No soy nada");  
    }
}
queSoy(numero);

