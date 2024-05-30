import { Form, Button, Row, Container } from 'react-bootstrap';

export const Formularios = () => {
    return (
        <Container fluid className="my-3">
            <Row>
                <div className="col col-md-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="apellido">
                            <Form.Label>Apellido:</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su apellido" />
                            <Form.Text className="text-muted"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </div>
            </Row>
        </Container>
    );
}