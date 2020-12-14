//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



function convertToAHigherDegree(number) {

    return parseInt(number / 60);
}

function calculateRemainder(number) {

    return number % 60;
}



function elementsAccumulator(elementsList) {

    let sumOfElements = 0;

    for (let i = 0; i < elementsList.length; i++) {

        sumOfElements += Number(elementsList[i].value)
    }
    return sumOfElements
}

function calculateTotalTime(elementsList, number) {

    return elementsAccumulator(elementsList) + convertToAHigherDegree(number)
}
const $calcularTimpoTotal = document.querySelector('#calcular');


$calcularTimpoTotal.onclick = function() {

    const secondsList = document.querySelectorAll('.segundos');
    const minutesList = document.querySelectorAll('.minutos');
    const hoursList = document.querySelectorAll('.horas');



    let seconds = calculateRemainder(elementsAccumulator(secondsList))

    let minutes = calculateRemainder(elementsAccumulator(minutesList))

    let hours = calculateTotalTime(hoursList, calculateTotalTime(minutesList, elementsAccumulator(secondsList)))





    document.querySelector('#tiempo-total-videos').innerHTML = `El tiempo total de clases es: ${hours}:${minutes}:${seconds}`;
}