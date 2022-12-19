// buscar o recorrer array con objetos a dentro 
var articulos = [
    {nombre:"Bici",costo: 3000},
    {nombre:"Tv",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Telefono",costo:10000},
    {nombre:"Pc",costo:20000},
    {nombre:"Teclado",costo:500},
    {nombre:"Audifonos",costo:1700}
];

// filter genera un nuevo arreglo con elementos que cumplan la condicion del filter
 var articulosFiltrados = articulos.filter(function(articulo){
     return articulo.costo <= 500
 });

//  map genera un nuevo array pero solo guarda el nombre de los objetos en el arreglo
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// find regresa si existe lo que mande a buscar y si tiene repetidos solo me dara el primer en la lista igualmente crea un nuevo array
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Pc";
});

// forEach este no me genera un array nuevo y me genera solo los nombres de los objetos de mi arreglo, nuevamente no genera un nuevo arreglo
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

// some() solo regresa la respuestam logica verdadero o falso a lo preguntado en la condicion del return y tambien genera un array nuevo
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});