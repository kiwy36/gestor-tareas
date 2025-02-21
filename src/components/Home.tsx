import React from 'react';

const mensajex = 'mensaje';
const extra = ' extra';
console.log(mensajex + extra);
function text() {
    console.log('se ejecuto text')
}
text()

const dato1 = 1;
const dato2 = 2;

const Datos: React.FC = () => {
    const resultado = dato1 + dato2;
    console.log(resultado);
    return (
        <div>
            <h1>{resultado}</h1>
        </div>
    );
};
const mensaje: string = "¡Hola, TypeScript!";
console.log(mensaje);
//let valores: Array<boolean> = [true, false, true];

const Producto: { nombre: string; precio: number; estado: boolean } = {
    nombre: "remera",
    precio: 12,
    estado: false,
};

const mostrarProducto = () => {
    const productoString = `Nombre: ${Producto.nombre}, Precio: ${Producto.precio}, Estado: ${Producto.estado ? "Disponible" : "No disponible"}`;
    console.log(productoString);
    return productoString;
}

mostrarProducto();

function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
  }
  console.log(saludar("Kevin")); // Imprime: Hola, Kevin!
  console.log(saludar("denis")); // Imprime: Hola, Kevin!
  console.log(saludar("pepe")); // Imprime: Hola, Kevin!



const Home: React.FC = () => {
     // Declaramos variables con anotación explícita
    const mensaje: string = "¡Hola, mundo!";
    const contador: number = 5;
    const activo: boolean = false;
    const Saludar=(nombre: string):string=>{
        return `hola ${nombre}`
    }
    const saludo=(Saludar("kevin")    )
    return (
        <>
        <div>nuevo proyecto gestor tareas crud</div>
        <Datos />
        <h1>{mensaje}</h1>
        <p>El contador es: {contador}</p>
        <p>Estado activo: {activo ? "Sí" : "No"}</p>
        <p>{saludo}</p>
        </>
    );
};

export default Home;
