// condicionales "Reglas para decir que es cierto o no"
// if (condicion){Tarea a desarrollarse si la condicion se cumple}
var edad = 18;
if (edad === 18){
    console.log("puedes votar, Sera tu 1ra Votacion");
}
else if (edad > 18 ){
    console.log("Puedes volver a votar");
}
else{
    console.log("no puedes votar");
}

// operador ternario Genera un if y un else en la misma linea

// conditicion ? true : false; "sintaxis"

var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno":"No, no soy un uno";
console.log(resultado);