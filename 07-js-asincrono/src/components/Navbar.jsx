import './Navbar.module.css';

export const Navbar = () => {
    return <nav>
        <ul>
            <li><a href="/">Fetch</a></li>
            <li><a href="/promesas">Promesas</a></li>
            <li><a href="/asyncawait">AsyncAwait</a></li>
        </ul>
    </nav>;
}