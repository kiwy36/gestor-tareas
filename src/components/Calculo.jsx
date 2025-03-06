import React, { useState } from 'react';

// Función para calcular la edad
function CalcularEdad(natalicio, fechaActual) {
    return fechaActual - natalicio;
}

// Componente principal de React
export default function Calculo() {
    const [edad, setEdad] = useState(null);

    // Pedir datos al usuario
    const pedirDatos = () => {
        const fechaActual = Number(prompt('¿En qué año estamos?'));
        const natalicio = Number(prompt('¿En qué año naciste?'));
        const tiempoTranscurrido = CalcularEdad(fechaActual, natalicio);
        setEdad(tiempoTranscurrido);
    };

    return (
        <div>
            <h1>Calculadora de Edad</h1>
            <button onClick={pedirDatos}>Calcular Edad</button>
            {edad !== null && <p>Han pasado {edad} años desde que naciste.</p>}
        </div>
    );
}
