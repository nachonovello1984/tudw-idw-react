import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fetch } from './pages/Fetch';
import { Promesas } from './pages/Promesas';
import { AsyncAwait } from './pages/AsyncAwait';
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
            <Route path="/" element={<Fetch />} />
            <Route path="/promesas" element={<Promesas />} />
            <Route path="/asyncawait" element={<AsyncAwait />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
