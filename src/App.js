import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
