// coercion implicita
var a = 4 + "7";
typeof a;
// pega los valores como string "47" tipo string

var b = 4 * "7";
typeof b;
// desarrolla la operacion "28" tipo numero

// coercion Explicita es cuando por mi cuenta quiero pasar un tipo de variable a otro 
var a = 20;
var b = a + "";
// aqui aplicamos la coercion explicita
var c = String(a);
typeof c;
// pasamos de una variable num a que sea un variable string en c