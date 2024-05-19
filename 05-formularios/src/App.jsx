import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [personasArray, setPersonasArray] = useState([]);

  const [persona, setPersona] = useState({
    apellido: "Novello",
    nombre: "Ignacio",
  });

  useEffect(() => {
    let lsPersonas = JSON.parse(localStorage.getItem("personas"));
    if (typeof (lsPersonas) === "undefined") {
      lsPersonas = [];
    }
    setPersonasArray(lsPersonas);
  }, []);

  const enviarForm = () => {
    alert(JSON.stringify(persona));
    let lsPersonas = [];
    if (localStorage.getItem("personas")) {
      lsPersonas = JSON.parse(localStorage.getItem("personas"));
    }
    lsPersonas.push(persona);
    localStorage.setItem("personas", JSON.stringify(lsPersonas));
    setPersonasArray(lsPersonas);
  };

  return (
    <>
      <header></header>
      <main>
        {!personasArray ? "" :
          <table>
            <thead><tr><th>Apellido</th><th>Nombre</th></tr></thead>
            <tbody>{
              personasArray.map((p, index) => <tr key={index}><td>{p.apellido}</td><td>{p.nombre}</td></tr>)
            }
            </tbody>
          </table>
        }
        <form>
          <fieldset>
            <legend>Datos identificatorios</legend>
            <div className="row">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" 
                id="apellido" 
                name="apellido" 
                size={50}
                value={persona.apellido}
                onChange={(evt) => setPersona({ ...persona, apellido: evt.target.value })} />
            </div>
            <div className="row">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" 
                id="nombre"
                name="nombre" size={50}
                value={persona.nombre}
                onChange={(evt) => setPersona({ ...persona, nombre: evt.target.value })} />
            </div>
          </fieldset>

          <input type="button" value="Guardar" onClick={() => enviarForm()} />
        </form>
      </main>
    </>
  );
}

export default App;
