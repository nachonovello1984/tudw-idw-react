import './App.css';
import './reset.css'
import { Header } from './Header';
import { Nav } from './Nav';
import { Main } from './Main';
import { Footer } from './Footer'

function App() {
  return (
    <>
      <Header nombre="Intro a ReactJS"/>
      <Nav />
      <Main nroClase="8" tituloTema="Como hacer uso de las props" />
      <Footer />
    </>
  );
}

export default App;
