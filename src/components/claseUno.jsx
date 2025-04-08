//Tarea uno
// Función que calcula los años transcurridos
export default function CalcularEdad (natalicio,fechaActual){
    return fechaActual -natalicio;
}
//conseguir info del año actual y el año de natalicio
const fechaActual =Number(prompt('en que año estamos ?'));
const natalicio = Number(prompt('que año naciste ?'))
// Calculamos cuántos años han pasado
const tiempoTranscurrido = CalcularEdad(fechaActual,natalicio);
// Mostramos el resultado en consola
console.log(`Han pasado ${tiempoTranscurrido} años desde que naciste.`);
