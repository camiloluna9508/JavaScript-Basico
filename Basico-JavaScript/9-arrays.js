var frutas = ["Manzana", "Plátano","Cereza","Fresa"];

console.log(frutas);
console.log(frutas[1]);
// Tamaño del arreglo
console.log(frutas.length);
// metodos para mutar el array
// agrega elementos a los arreglos "ultimo lugar"
var masFrutas = frutas.push("Uvas");
// elimina  el ultimo elemento del arreglos
var ultimo = frutas.pop("Uvas");
// agrega elementos a los arreglos "primer lugar"
var nuevaLongitud = frutas.unshift("Pera");
// elimina  el primer elemento del arreglo
var borrarPrimer = frutas.shift();
// saber la posicion de un elemento dentro del arreglo
var posicion = frutas.indexOf("Cereza");