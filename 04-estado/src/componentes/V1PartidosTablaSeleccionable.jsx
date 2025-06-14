import { useState } from 'react';
import './../componentes/PartidosTabla.css';

export const V1PartidosTablaSeleccionable = ({ datos }) => {

    const [seleccion, setSeleccion] = useState(null); //null es valor inicial

    const onSeleccionClicked = (index) => {
        setSeleccion(index); //<------ Acá modifico el valor que tenía seleccion
    }

    return (<>  
        <p>Índice seleccionado: {seleccion}</p>
        <table>
            <thead>
                <tr>
                    <th>Índice</th>
                    <th>Año</th>
                    <th>Pais</th>
                    <th>Fecha</th>
                    <th>Local</th>
                    <th>Visitante</th>
                    <th>Goles local</th>
                    <th>Goles visitante</th>
                    <th>Ganador</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((p, index) =>
                    <tr key={index}
                        className={(index === seleccion) ? "seleccionado" : ""}>
                        <td>{index}</td>
                        <td style={{ textAlign: "center" }}>{p.year}</td>
                        <td>{p.country}</td>
                        <td style={{ textAlign: "center" }}>{
                            (new Date(p.date)).toLocaleDateString()
                        }</td>
                        <td>{p.home_team}</td>
                        <td>{p.away_team}</td>
                        <td style={{ textAlign: "center" }}>{p.home_score}</td>
                        <td style={{ textAlign: "center" }}>{p.away_score}</td>
                        <td>{p.winning_team}</td>
                        <td><button onClick={() => onSeleccionClicked(index)}>Seleccionar</button></td>
                    </tr>
                )}
            </tbody>
        </table >
    </>);
};