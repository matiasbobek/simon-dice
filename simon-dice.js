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

$botonEmpezar.onclick = function(){
    turno = 1;
    mostrarTurno();
}

function mostrarTurno(turno){
    const $turno = document.querySelector("#turno").textContent = `Turno: ${turno}`;
}
