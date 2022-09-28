import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Shoppage from './components/Shoppage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar count='12'/>
      {/* <Homepage /> */}

      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='shop' element={<Shoppage />}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
