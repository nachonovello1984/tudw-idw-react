import './App.css';
import './reset.css'
import { Header } from './Header';
import { Nav } from './Nav';
import { Main } from './Main';
import { Footer } from './Footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main nroClase="8" tituloTema="Introducción a ReactJS" />
      <Footer />
    </>
  );
}

export default App;
