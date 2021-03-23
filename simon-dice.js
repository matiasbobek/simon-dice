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
    mostrarTurnoMaquina();
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

function mostrarTurnoMaquina(){
    turno++;
    mostrarEstadoJuego();
    mostrarNumeroTurno();
    const cuadroAleatorio = elegirCuadradoAleatorio();
    secuenciaMaquina.push(cuadroAleatorio);
    resaltarCuadro(cuadroAleatorio);   
    habilitarTurnoJugador();
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
    },1000)
}

function habilitarTurnoJugador(){
    //alertar el cuadro que clickea

}

function habilitarClickearCuadro (){
    const $cuadros = document.querySelectorAll('[name=cuadros]');
    $cuadros.forEach(function($cuadro){
        $cuadro.onclick=function(){
            alert("me clicearon")
        }
    })
}