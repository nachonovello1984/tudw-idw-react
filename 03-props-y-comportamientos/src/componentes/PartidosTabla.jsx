import './../componentes/PartidosTabla.css';

export const PartidosTabla = ({ datos }) => {
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
            </tr>
        </thead>
        <tbody>
            {datos.map((p, index) =>
                <tr key={index}>
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
                </tr>
            )}
        </tbody>
    </table>
};