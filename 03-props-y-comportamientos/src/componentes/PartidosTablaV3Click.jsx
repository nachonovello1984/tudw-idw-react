import './../componentes/PartidosTabla.css';
import {PartidosFilaV3Click} from './PartidosFilaV3Click';

export const PartidosTablaV3Click = ({ datos }) => {
    return <table>
        <thead>
            <tr>
                <th>Año</th>
                <th>Pais</th>
                <th>Fecha</th>
                <th>Local</th>
                <th>Visitante</th>
                <th>Goles local</th>
                <th>Goles visitante</th>
                <th>Ganador</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {datos.map((p, index) => <PartidosFilaV3Click p={p} key={index}/>)}
        </tbody>
    </table>
};