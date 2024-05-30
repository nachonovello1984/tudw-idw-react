import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fetch } from './pages/Fetch';
import { Formularios } from './pages/Formularios';
import { NavbarIDW } from './components/NavbarIDW';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarIDW />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Fetch />} />
            <Route path="/formularios" element={<Formularios />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
