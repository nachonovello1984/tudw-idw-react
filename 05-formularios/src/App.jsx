import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [personasArray, setPersonasArray] = useState([]);

  const [persona, setPersona] = useState({
    apellido: "",
    nombre: "",
    pieHabil: "Derecho"
  });

  useEffect(() => {
    cargar();
  }, []);

  const cargar = () => {
    let lsPersonas = JSON.parse(localStorage.getItem("personas"));
    if (typeof (lsPersonas) === "undefined") {
      lsPersonas = [];
    }
    setPersonasArray(lsPersonas);
  }

  const enviarForm = () => {
    //alert(JSON.stringify(persona));
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
            <thead><tr><th>Apellido</th><th>Nombre</th><th>Pie Hábil</th></tr></thead>
            <tbody>{
              personasArray.map((p, index) => 
              <tr key={index}>
                <td>{p.apellido}</td>
                <td>{p.nombre}</td>
                <td>{p.pieHabil}</td>
              </tr>)
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
                placeholder="Escriba aquí su apellido"
                size={50}
                value={persona.apellido}
                onChange={(evt) => setPersona({ ...persona, apellido: evt.target.value })} />
            </div>
            <div className="row">
              <label htmlFor="nombre">Nombre</label>
              <input type="text"
                id="nombre"
                name="nombre"
                size={50}
                value={persona.nombre}
                onChange={(evt) => setPersona({ ...persona, nombre: evt.target.value })} />
            </div>
            <div className="row">
              <label htmlFor="pieHabil">Pie Hábil</label>
                <select id="pieHabil"
                name="pieHabil"
                onChange={(evt) => setPersona({ ...persona, pieHabil: evt.target.value })}
                >
                  <option value="Derecho">Derecho</option>
                  <option value="Izquierdo">Izquierdo</option>
                </select>
            </div>
          </fieldset>

          <input type="button" value="Guardar" onClick={() => enviarForm()} />
          <input type="button" value="Cargar" onClick={() => cargar()} style={{backgroundColor: "gray"}}/>
        </form>

        
      </main>
    </>
  );
}

export default App;
