import { useState, useEffect } from "react";

export const AsyncAwait = () => {

    const [jugadores, setJugadores] = useState([]);

    const buscarDatos = async () => {
        try {
            const response = await fetch("/datos/jugadores.json");
            const datos = await response.json();
            setJugadores(datos);
        } catch (error) {
            console.error(error);
        }
    }

    const vaciarTabla = () => {
        setJugadores([]);
    }

    useEffect(() => {
        const buscarEffect = async () => await buscarDatos();
        buscarEffect();
    },[]);


    return <>
        <button onClick={async () => await buscarDatos()}>🔍 Buscar Datos</button>
        <button onClick={vaciarTabla}>❌ Vaciar</button>
        <table>
            <thead>
                <tr><th>N.º</th><th>Pos.</th><th>Nombre</th><th>Edad</th></tr>
            </thead>
            <tbody>
                {jugadores.map(x => <tr>
                    <td>{x.dorsal}</td>
                    <td>{x.nacionalidad}</td>
                    <td>{x.nombre}</td>
                    <td>{x.edad}</td>
                </tr>)}
            </tbody>
        </table>
    </>;
}