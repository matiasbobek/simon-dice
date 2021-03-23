/*
to do

Boton empezar

MostrarEstadoJuego (div 1)
    Es el turno de la máquina
    Es tu turno
    Perdist luego de x turnos.

MostrarTurnoMaquina 
    Turno = N
    Aclarar N cuadros 
    MostrarTurnoJugador();


TurnoJugador(N){
    HabilitarCuadros()
    cuadro.click =function(){
        secuencia.push = cuadro
    }

    if secuenciaJugador[i] !== secuenciaMaquina[i]{
        MostrarPerdiste();
    }
    if secuenciaJugador.lenght = secuenciaMaquina.lenght{
        if secuenciaJugador === secuenciaMaquina{
            MostrarTurnoMaquina();
        }
    }
}

    */

const $botonEmpezar = document.querySelector("#boton-empezar");
let turno = 0;
let esTurnoJugador = false;
let secuenciaJugador = [];
let secuenciaMaquina = [];

$botonEmpezar.onclick = function(){
    administrarTurnoMaquina();
    $botonEmpezar.disabled = true;
    //probablemente deshabilitar botones 
}

function mostrarNumeroTurno(){
    const $turno = document.querySelector("#turno").textContent = `Turno: ${turno}`;
}

function mostrarEstadoJuego(esQuePerdio){
    const $estado = document.querySelector("#estado")

    if (esQuePerdio){
        $estado.textContent = `Perdiste en el turno ${turno}`
    } else if (esTurnoJugador){
        $estado.textContent = "Es tu turno"
    } else if (!esTurnoJugador){
        $estado.textContent = "Es turno de la máquina"
    }
}

function administrarTurnoMaquina(){

    bloquearCuadros();
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
}

function bloquearCuadros(){

    const $cuadros = document.querySelectorAll('[name=cuadros]');
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick=function(){

        }
    }) 
}