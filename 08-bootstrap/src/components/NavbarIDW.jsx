import { Navbar, Nav } from 'react-bootstrap';
import "./NavbarIDW.module.css";

export const NavbarIDW = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Nav className="mr-auto">
                <Nav.Link href="/">Tablas</Nav.Link>
                <Nav.Link href="/formularios">Formularios</Nav.Link>
            </Nav>
        </Navbar>
    );
}