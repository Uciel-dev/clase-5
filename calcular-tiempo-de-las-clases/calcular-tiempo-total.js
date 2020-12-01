//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



function convertir(number) {
    return number / 60;

}

function exedente(number) {
    return number % 60;
}

function validar(number) {
    return number > 60;
}

function cantidadTotalDeTiempo(segundosList, minutosList, horasList) {

    let tiempoTotal = [0, 0, 0];

    for (let i = 0; i < segundosList.length; i++) {

        tiempoTotal[0] += Number(segundosList[i].value)
        tiempoTotal[1] += Number(minutosList[i].value)
        tiempoTotal[2] += Number(horasList[i].value)
    }

    return tiempoTotal

}

function corregirTiempoTotal(segundos, minutos, horas) {

    if (validar(segundos)) {
        minutos += parseInt(convertir(segundos))
        segundos = exedente(segundos)
    }
    if (validar(minutos)) {
        horas += parseInt(convertir(minutos))
        minutos = exedente(minutos)
    }

    return [segundos, minutos, horas]
}


const $cantidadDeClases = document.querySelector('#calcular');


$cantidadDeClases.onclick = function() {

    const segundosList = document.querySelectorAll('.segundos');
    const minutosList = document.querySelectorAll('.minutos');
    const horasList = document.querySelectorAll('.horas');

    //Se debe respertar el siguiente fotmato del array, (segundos[0], minutos[1],horas[2])
    let cantidadTotal = cantidadTotalDeTiempo(segundosList, minutosList, horasList);

    let tiempoCorregido = corregirTiempoTotal(cantidadTotal[0], cantidadTotal[1], cantidadTotal[2]);

    let segundos = tiempoCorregido[0]
    let minutos = tiempoCorregido[1]
    let horas = tiempoCorregido[2]


    document.querySelector('#tiempo-total-videos').innerHTML = `El tiempo total de clases es: ${horas}:${minutos}:${segundos}`;
}