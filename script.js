const diasEl = document.getElementById('dias')
const horasEl = document.getElementById('horas')
const minutosEl = document.getElementById('minutos')
const segundosEl = document.getElementById('segundos')

const añoNuevo = '1 Jan 2022'

function contador () {
    const fechaañoNuevo = new Date(añoNuevo);
    const fechaActual = new Date();

    const totalSegundos = (fechaañoNuevo - fechaActual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasEl.innerHTML = formatoFecha(dias);
    horasEl.innerHTML = formatoFecha(horas);
    minutosEl.innerHTML = formatoFecha(minutos);
    segundosEl.innerHTML = formatoFecha(segundos);
}

function formatoFecha(fecha){
    return fecha < 10 ? (`0${fecha}`) : fecha;
}

//Llamada inicial
contador();

setInterval(contador, 1000);