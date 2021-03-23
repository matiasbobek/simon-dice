

const $botonEmpezar = document.querySelector("#boton-empezar");
let turno = 0;
let esTurnoJugador = false;
let secuenciaJugador = [];
let secuenciaMaquina = [];

$botonEmpezar.onclick = function(){
    reiniciarParametros();
    administrarTurnoMaquina();
    $botonEmpezar.disabled = true;
    
}

function mostrarNumeroTurno(){
    const $turno = document.querySelector("#turno").textContent = `Turno: ${turno}`;
}

function mostrarEstadoJuego(esQuePerdio){
    const $estado = document.querySelector("#estado")
    $estado.className="alert alert-primary"

    if (esQuePerdio){
        $estado.textContent = `Perdiste en el turno ${turno}. Tocá empezar para reiniciar el juego`
        $estado.className="alert alert-danger"
    } else if (esTurnoJugador){

        $estado.textContent = "Es tu turno"
    } else if (!esTurnoJugador){
        $estado.textContent = "Es turno de la máquina"
    }
}

function administrarTurnoMaquina(){

    turno++;
    esTurnoJugador=false;
    mostrarEstadoJuego();
    mostrarNumeroTurno();

    const cuadroAleatorio = elegirCuadradoAleatorio();
    secuenciaMaquina.push(cuadroAleatorio);

    for (let i = 0; i < turno; i++){
        setTimeout(function(){
            resaltarCuadro(secuenciaMaquina[i]);   
        }, i*1000);
    }


    setTimeout(function(){
        administrarTurnoJugador();
    }, 1000*turno);

}

function elegirCuadradoAleatorio(){
    const $cuadros = document.querySelectorAll('[name=cuadros]')
    let numeroAleatorio = Math.floor(Math.random()*$cuadros.length);
    return $cuadros[numeroAleatorio];
}

function resaltarCuadro($cuadro){
    $cuadro.style.opacity = "50%";
    setTimeout(function(){
        $cuadro.style.opacity = "100%";
    },900)
}

function administrarTurnoJugador (){
    secuenciaJugador=[]
    contadorClicks = 0;
    esTurnoJugador=true;

    mostrarEstadoJuego();
    mostrarNumeroTurno();
    
    const $cuadros = document.querySelectorAll('[name=cuadros]');
    
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick=function(){
            contadorClicks++;
            resaltarCuadro($cuadro);
            secuenciaJugador.push($cuadro);

            for(let i = 0; i<contadorClicks; i++){
                if (secuenciaJugador[i] !== secuenciaMaquina[i]) {
                    perder();
                    return;
                  } 
            }

            if (secuenciaJugador.length === secuenciaMaquina.length){
                bloquearCuadros();
                setTimeout(function(){
                    administrarTurnoMaquina();
                }, 1000);
            } 

        }
    }) 
}

function perder(){
    mostrarEstadoJuego(true);   
    bloquearCuadros();
    $botonEmpezar.disabled=false;

}

function bloquearCuadros(){

    const $cuadros = document.querySelectorAll('[name=cuadros]');
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick=function(){

        }
    }) 
}

function reiniciarParametros(){
    turno = 0;
    esTurnoJugador = false;
    secuenciaJugador = [];
    secuenciaMaquina = [];
}