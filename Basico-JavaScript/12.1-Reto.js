function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
function alAzar(){
    var azar = (Math.random()*3+1);
    if (azar < 2){azar = 1;}
    else if (azar < 3){azar = 2;}
    else {azar = 3;}
    return (azar);
}
var marcas = ["Tesla","Toyota","BMW"];
var modelos = ["X4","Modelo S","Corolla"];
var años = [2010,2020,2018];
var autos = [];
for(var i = 0; i<30; i++){
    var autoNuevo = autos.unshift(new auto(marcas[alAzar()-1],modelos[alAzar()-1],años[alAzar()-1]));
};
while(autos.length > 0){
    var imprimir =autos.shift();
    console.log(imprimir);
};
