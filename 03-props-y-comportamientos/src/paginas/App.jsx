import './../paginas/App.css';
import { datos } from './../datos/partidos'
import { PartidosTablaV3Click } from '../componentes/PartidosTablaV3Click';

function App() {
  return (
    <>
      <header><h1>Partidos de los mundiales de fútbol 🏐🏆</h1></header>
      <main>
        <PartidosTablaV3Click datos={datos} />
      </main>
    </>
  );
}

export default App;
