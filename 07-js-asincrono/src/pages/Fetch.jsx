import { useState, useEffect } from "react";

export const Fetch = () => {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {

        buscarDatos();


    }, []);

    const buscarDatos = () => {
        fetch("/datos/jugadores.json")
            .then(response => {
                if (!response.ok) {
                    throw Error("Error al procesar la solicitud");
                }
                response.json()
                    .then(datos => {
                        setJugadores(datos);
                    })
                    .catch(error => console.error(error));

            }).catch(error => console.error(error));
    }

    const vaciarTabla = () => {
        setJugadores([]);
    }


    return <>
        <button onClick={buscarDatos}>🔍 Buscar Datos</button>
        <button onClick={vaciarTabla}>❌ Vaciar</button>
        <table>
            <thead>
                <tr><th>N.º</th><th>Pos.</th><th>Nombre</th><th>Edad</th></tr>
            </thead>
            <tbody>
                {jugadores.map((x, index) => <tr key={index}>
                    <td>{x.dorsal}</td>
                    <td>{x.nacionalidad}</td>
                    <td>{x.nombre}</td>
                    <td>{x.edad}</td>
                </tr>)}
            </tbody>
        </table>
    </>;
}