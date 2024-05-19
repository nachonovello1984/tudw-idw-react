import './../paginas/App.css';
import { datos } from './../datos/partidos';
import { V1PartidosTablaSeleccionable } from '../componentes/V1PartidosTablaSeleccionable';

function App() {

  return (
    <>
      <header><h1>Partidos de los mundiales de fútbol 🏐🏆</h1></header>
      <main>
        <V1PartidosTablaSeleccionable datos={datos} />
      </main>
    </>
  );
}

export default App;
