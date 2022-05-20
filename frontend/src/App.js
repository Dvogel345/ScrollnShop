import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

// import data from './data';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to='/'>Scroll n Shop</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
