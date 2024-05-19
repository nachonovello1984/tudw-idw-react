export const PartidosFilaV3Click = ({ p }) => {
    const handleClick = (seleccion) => {
        alert(`Seleccionaste: ${seleccion.home_team} vs ${seleccion.away_team}`);
    };

    return <tr>
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
        <td style={{ textAlign: "center" }}>
            <button onClick={() => handleClick(p)}>🔍 Ver</button>
        </td>
    </tr>
}