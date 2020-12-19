//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function secondsList() {

    const secondsList = document.querySelectorAll('.seconds')
    return elementsAccumulator(secondsList)
}

function minutesList() {

    const minutesList = document.querySelectorAll('.minutes')
    return elementsAccumulator(minutesList)
}

function hoursList() {

    const minutesList = document.querySelectorAll('.hours')
    return elementsAccumulator(minutesList)
}



function elementsAccumulator(elementsList) {

    let sumOfElements = 0;

    for (let i = 0; i < elementsList.length; i++) {

        sumOfElements += Number(elementsList[i].value)
    }

    return sumOfElements
}

function showResults(seconds, minutes, hours) {
    document.querySelector('#time-total-videos').innerHTML = `El tiempo total de clases es: ${hours}:${minutes}:${seconds}`;
}


const $calcularTimpoTotal = document.querySelector('#calculate');


$calcularTimpoTotal.onclick = function() {

    const secondsSum = secondsList()
    const minutesSum = minutesList()
    const hoursSum = hoursList()

    const remainingSeconds = secondsSum % 60
    const remainingMinutes = secondsSum % 60

    const seconds = remainingSeconds
    const minutes = remainingMinutes + parseInt(secondsSum / 60)
    const hours = hoursSum + parseInt(minutesSum / 60)



    showResults(seconds, minutes, hours)
}