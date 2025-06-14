import { useState, useEffect } from "react";
import styles from './JugadoresList.module.css';

const JugadoresList = () => {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        const fetchJugadores = async () => {
            const response = await fetch('datos/jugadores.json');

            if (!response.ok) {
                throw new Error('Error en la respuesta: ' + response.status);
            }

            const data = await response.json();
            setJugadores(data);
        };

        try {
            fetchJugadores();
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <>
            {(jugadores && jugadores.length > 0) &&
                <table>
                    <thead>
                        <tr><th>Nº</th><th>Nombre</th><th>Posición</th><th>Club</th></tr>
                    </thead>
                    <tbody>
                        {(jugadores.map((x, index) =>
                            <tr key={index}>
                                <td>{x.numero}</td>
                                <td>{x.nombre}</td>
                                <td>{x.posicion}</td>
                                <td>{x.club}</td>
                            </tr>))}
                    </tbody>

                </table>
            }
            {(!jugadores || jugadores.length == 0) && <p>Sin datos para mostrar</p>}
        </>
    );
};

export { JugadoresList };