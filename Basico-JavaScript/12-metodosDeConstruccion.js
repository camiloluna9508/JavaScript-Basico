// hacer una listas de carros  "Funcion constructura"
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto("Tesla","Model 3",2020);
var autoNuevo2 = new auto("Chevrolet","Sandero",2018);
var autoNuevo3 = new auto("Renaut","Twingo",2013);