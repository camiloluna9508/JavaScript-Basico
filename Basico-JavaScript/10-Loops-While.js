
var estudiantes = ["Maria","Sergio","Luis","Rosa"];
function saludarEstudiantes(estudiante)
{
    console.log('Hola '+ estudiante);
}
// For normal
for(var i = 0;i < estudiantes.length; i++)
{
    saludarEstudiantes(estudiantes[i]);
}


var estudiantes = ["Maria","Sergio","Luis","Rosa"];
function saludarEstudiantes(estudiante)
{
    console.log('Hola '+ estudiante);
}
// For of
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// while

var estudiantes = ["Maria","Sergio","Luis","Rosa"];
function saludarEstudiantes(estudiante)
{
    console.log('Hola '+ estudiante);
}
while (estudiantes.length > 0)
{
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante); 
}