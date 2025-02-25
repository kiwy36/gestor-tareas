// FuncionesDemo.tsx
import React from 'react';

///////////////////////
// 1. Declaración de funciones
///////////////////////
function saludarConFunction(nombre: string): string {
  console.log(`(function) Procesando saludo para ${nombre}`);
  return `¡Hola, ${nombre}!`;
}

const saludarConArrow = (nombre: string): string => {
  console.log(`(arrow function) Procesando saludo para ${nombre}`);
  return `¡Hola, ${nombre}!`;
};

///////////////////////
// 2. Tipado de parámetros y retorno
///////////////////////
function sumar(a: number, b: number): number {
  console.log(`Sumando ${a} y ${b}`);
  return a + b;
}

const sumarArrow = (a: number, b: number): number => {
  console.log(`(arrow) Sumando ${a} y ${b}`);
  return a + b;
};

///////////////////////
// 3. Parámetros opcionales y valores por defecto
///////////////////////
const crearSaludoOpcional = (nombre: string, saludo?: string): string => {
  const saludoFinal = saludo ? saludo : "Hola";
  console.log(`Creando saludo para ${nombre} usando '${saludoFinal}'`);
  return `${saludoFinal}, ${nombre}!`;
};

const crearSaludoDefault = (nombre: string, saludo: string = "Bienvenido"): string => {
  console.log(`Creando saludo para ${nombre} con valor por defecto '${saludo}'`);
  return `${saludo}, ${nombre}!`;
};

///////////////////////
// 4. Rest parameters
///////////////////////
const sumarTodos = (...numeros: number[]): number => {
  console.log("Sumando los siguientes números:", numeros);
  return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
};

const concatenarStrings = (...cadenas: string[]): string => {
  console.log("Concatenando las siguientes cadenas:", cadenas);
  return cadenas.join(" ");
};

///////////////////////
// Componente React que usa todas las funciones anteriores
///////////////////////
const FuncionesDemo: React.FC = () => {
  // Uso de funciones de saludo
  const saludo1 = saludarConFunction("Kevin");
  const saludo2 = saludarConArrow("María");

  // Uso de funciones de suma
  const suma1 = sumar(3, 7);
  const suma2 = sumarArrow(10, 15);

  // Uso de funciones con parámetros opcionales y default
  const saludoOpcionalConParametro = crearSaludoOpcional("Ana", "¡Buenos días");
  const saludoOpcionalSinParametro = crearSaludoOpcional("Luis");
  const saludoDefault = crearSaludoDefault("Carlos");
  const saludoDefaultPersonalizado = crearSaludoDefault("Sofía", "Bienvenida");

  // Uso de funciones con rest parameters
  const sumaTotal = sumarTodos(1, 2, 3, 4, 5);
  const cadenaConcatenada = concatenarStrings("React", "con", "TypeScript", "es", "divertido");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Demostración de Funciones en TypeScript</h1>

      <section>
        <h2>1. Declaración de Funciones</h2>
        <p>Saludo (function): {saludo1}</p>
        <p>Saludo (arrow): {saludo2}</p>
      </section>

      <section>
        <h2>2. Tipado de Parámetros y Retorno</h2>
        <p>Suma (function): 3 + 7 = {suma1}</p>
        <p>Suma (arrow): 10 + 15 = {suma2}</p>
      </section>

      <section>
        <h2>3. Parámetros Opcionales y Valores por Defecto</h2>
        <p>Saludo opcional (con parámetro): {saludoOpcionalConParametro}</p>
        <p>Saludo opcional (sin parámetro): {saludoOpcionalSinParametro}</p>
        <p>Saludo con valor por defecto: {saludoDefault}</p>
        <p>Saludo con valor por defecto (personalizado): {saludoDefaultPersonalizado}</p>
      </section>

      <section>
        <h2>4. Rest Parameters</h2>
        <p>Suma total: {sumaTotal}</p>
        <p>Cadena concatenada: {cadenaConcatenada}</p>
      </section>
    </div>
  );
};

export default FuncionesDemo;
