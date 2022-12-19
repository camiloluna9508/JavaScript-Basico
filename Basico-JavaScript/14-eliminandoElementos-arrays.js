var numArray = [1,2,3,4,5];
// Agregar
function newNum(){
    numArray.push(6,7);
    console.log(numArray);
};
newNum();
var txtArray = ["Ana","Juan","Tatiana","Camilo"];
// Agregar
function addCharacters(){
    txtArray.push("Chris","Maria");
    console.log(txtArray);
};
addCharacters();

// eliminar
function eliminar(){
    numArray.pop();
    console.log(numArray);
};
eliminar();