import './Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/institucional">Institucional</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>;
}