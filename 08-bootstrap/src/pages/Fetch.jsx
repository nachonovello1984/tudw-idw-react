import { useState, useEffect } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";

export const Fetch = () => {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => buscarDatos(), []);

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


    return <Container fluid className="my-3">
        <Row> 
            <div className="col">
                <Button onClick={buscarDatos} style={{ marginRight: "0.5rem" }}>🔍 Buscar Datos</Button>
                <Button  onClick={vaciarTabla}>❌ Vaciar</Button>
            </div>
        </Row>
        <Table striped>
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
        </Table>
    </Container>;
}