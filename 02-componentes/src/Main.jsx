import './Main.css';

export const Main = ({nroClase, tituloTema}) => {

    const date = new Date();

    const enlaces = [
        { href: "index.html", nombre: "Inicio" },
        { href: "#", nombre: "JSX" },
        { href: "#", nombre: "Componentes" },
        { href: "#", nombre: "Estado" },
        { href: "#", nombre: "Use Effect" },
        { href: "#", nombre: "React Router" },
    ];

    const lisJSX = enlaces.map((item, index) => 
        <li key={index}><a href="{item.href}">{item.nombre}</a></li>
    );
    const ulJSX = <ul>{lisJSX}</ul>;

    return <div className="main-container">
        <article>
            <section className="contenido">
                <h2>Ejemplos 111</h2>
                {ulJSX}

                <h2>Accediendo a valores</h2>
                <p>Fecha Hora Actual: {date.toLocaleString()}</p>
                <p>Clase Nº: {nroClase}. </p>
                <p>Tema: {tituloTema}. </p>

                {/* <Alert>El menú no funciona. Lo dejemos para la próxima clase donde veamos React.Routing</Alert> */}
            </section>
        </article>
    </div >;
}