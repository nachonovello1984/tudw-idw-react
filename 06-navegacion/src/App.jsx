import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Institucional } from './pages/Institucional';
import { Contacto } from './pages/Contacto';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
