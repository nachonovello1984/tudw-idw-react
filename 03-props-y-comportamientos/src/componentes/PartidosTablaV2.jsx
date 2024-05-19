import './../componentes/PartidosTabla.css';
import {PartidosFila} from './../componentes/PartidosFila';

export const PartidosTablaV2 = ({ datos }) => {
    return <table>
        <thead>
            <tr>
                <th>Año</th>
                <th>País</th>
                <th>Fecha</th>
                <th>Local</th>
                <th>Visitante</th>
                <th>Goles local</th>
                <th>Goles visitante</th>
                <th>Ganador</th>
            </tr>
        </thead>
        <tbody>
            {datos.map((p, index) => <PartidosFila p={p} key={index} />)}
        </tbody>
    </table>
};