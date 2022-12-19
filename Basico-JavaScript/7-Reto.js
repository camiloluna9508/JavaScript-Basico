// Piedra, Papel o Tijera "Game"
var posibilidades = ["Tijera","Papel","Piedra"];
var elemento = posibilidades[2];
function alAzar(){
    var azar = (Math.random()*3+1);
    if (azar < 2){azar = 1;}
    else if (azar < 3){azar = 2;}
    else {azar = 3;}
    var maquina = posibilidades[azar-1];
    console.log(maquina);
    return (maquina);
}

function posicion(a){
    var cont = 0;
    if (a == posibilidades[0]){
        cont = 0;
    }
    else if (a == posibilidades[1]){
        cont=1;
    }
    else {
        cont=2;
    }
    return (cont);
}

function myGame (elemento){
    var maquina = alAzar();
    var jugador1 = posicion(elemento);
    var jugador2 = posicion(maquina);
    console.log(jugador1);
    console.log(jugador2);
    // empate
    if (jugador1==jugador2){
        console.log(posibilidades[jugador1]+" -Vs- "+posibilidades[jugador2]);
        console.log("ES UN EMPATE JUGADORES");
    }

    // JUGADOR 1 ESCOGE TIJERA
    else if (jugador1 == 0) {
        // Ganar 
        if(jugador2==1){
            console.log(posibilidades[jugador1]+" -Vs- "+posibilidades[jugador2]);
            console.log("GANA TIJERA");
            console.log("! ERES EL GANADOR ---JUGADOR 1--- ¡");
        }
        // PERDER
        else{
            console.log(posibilidades[jugador1]+" -Vs- "+posibilidades[jugador2]);
            console.log("GANA PIEDRA");
            console.log("! ERES EL GANADOR ---JUGADOR 2--- ¡");
        }
    }

    // JUGADOR 1 ESCOGE PAPEL
    else if (jugador1 == 1) {
        // Ganar 
        if(jugador2==2){
            console.log(posibilidades[jugador1]+" -Vs- "+posibilidades[jugador2]);
            console.log("GANA PAPEL");
            console.log("! ERES EL GANADOR ---JUGADOR 1--- ¡");
        }
        // PERDER
        else {
            console.log(posibilidades[jugador1]+" -Vs- "+posibilidades[jugador2]);
            console.log("GANA TIJERA");
            console.log("! ERES EL GANADOR ---JUGADOR 2--- ¡");
        }
    }

    // JUGADOR 1 ESCOGE PIEDRA
    else {
        // Ganar 
        if(jugador2==0){
            console.log(posibilidades[jugador1]+" -Vs- "+posibilidades[jugador2]);
            console.log("GANA PIEDRA");
            console.log("! ERES EL GANADOR ---JUGADOR 1--- ¡");
        }
        // PERDER
        else {
            console.log(posibilidades[jugador1]+" -Vs- "+posibilidades[jugador2]);
            console.log("GANA PAPEL");
            console.log("! ERES EL GANADOR ---JUGADOR 2--- ¡");
        }
    }
}