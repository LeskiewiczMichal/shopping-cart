import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Shoppage from './components/Shoppage';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(name, quantity) {
    setCart((prevCart) => {
      return [...prevCart, { name: name, quantity: quantity }];
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="shop" element={<Shoppage addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
