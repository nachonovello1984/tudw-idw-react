export const PartidosFila = ({ p }) => {
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
    </tr>
}