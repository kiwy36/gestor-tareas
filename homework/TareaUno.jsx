// TAREAS video clase 1
// Tarea 1:
// Crear una funcion que tome como parametro el año actual y el año de nacimiento y calcule aproximadamente la edad del usuario
// Preguntarle estos datos al usuario y guardarlo en 2 variables.
// Ejecutar la funcion con estos datos
// Imprimir el resultado en la consola

function calcularEdadDelUsuario(añoNacimiento, añoActual) {
    return restar(añoActual, añoNacimiento);
}

const añoActual = Number(prompt('Que año es actualmente?'));
const añoNacimiento = Number(prompt('En que año naciste?'));
const edadUsuario = calcularEdadDelUsuario(añoNacimiento, añoActual)

console.log(
    'Tu edad es ' + edadUsuario + ' años'
);


// Tarea 2
// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual

function calcularSalarioMensual(salarioAnual) {
    const mesesEnUnAnio = 12
    return salarioAnual / mesesEnUnAnio;
}

let salarioAnual = Number(
    prompt('Cual es tu salario anual?')
);

console.log(salarioAnualAMensual(salarioAnual));

function calcularSalarioAnual(salarioMensual) {
    const mesesEnUnAnio = 12
    return salarioMensual * mesesEnUnAnio;
}

let salarioMensual = Number(prompt('Cual es tu salario mensual?'));

console.log(salarioMensualAAnual(salarioMensual));

// Funciones en cuestion
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!

function sumarORestar() {
    let operador = '+';
    let numero1 = 5;
    let numero2 = 3;

    if (operador === '+') {
        return sumar(numero1, numero2);
    } else {
        return restar(numero1, numero2);
    }
};

console.log(sumarORestar())

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function restarOSumar() {
    let operador = '-';
    let numero1 = 5;
    let numero2 = 3;

    if (operador === '-') {
        return restar(numero1, numero2);
    } else {
        return sumar(numero1, numero2);
    }
};

console.log(restarOSumar())

// TAREA: Creemos 2 funciones más: dividir y multiplicar.

function dividir(numeroADividir, divisor) {
    return numeroADividir / divisor
}

function multiplicar(numeroAMultiplicar, multiplicador) {
    return numeroAMultiplicar * multiplicador
}

// TAREA: Reescribamos el if-else que teníamos y extendámolos, agregando:
//       'else if' el 'operador' es igual a '-' - llamar a la función 'restar'
//       'else if' el 'operador' es igual a '/' - llamar a la función 'dividir'.
//       'else if' el 'operador' es igual a '*' - llamar a la función 'multiplicar'.
//       else console.log - "Perdón, no conozco ese operador".

let numero1;
let numero2;
let operador;

function pedirValores() {
    operador = prompt('Ingresa el operador a utilizar (+, -, /, *)');
    numero1 = Number(prompt('Indica el primer numero de la operacion (nro a multiplicar/nro a dividir en caso de)'));
    numero2 = Number(prompt('Indica el segundo numero de la operacion (multiplicador / divisor en caso de)'));
}
  
function calcular(n1, n2, operador) {
    if (operador === '+') {
        return sumar(n1, n2);
    } else if (operador === '-'){
        return restar(n1, n2);
    } else if (operador === '/') {
        return dividir((n1, n2));
    } else if (operador === '*') {
        return multiplicar((n1, n2));
    } else {
        return `Perdón, no conozco el operador ${operador}` 
    }
}

pedirValores();

const resultado = calcular(numero1, numero2, operador)
  
console.log(`El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`)