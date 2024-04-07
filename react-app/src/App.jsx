import React from 'react';
import Landing from './pages/landing.jsx';
import Details from './pages/productDetails.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import items from "./components/ProductCard/products.json"
import Products from './pages/ProductGrid.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/products/all' element={<Products/>}/>
          <Route path='/products/clothing' element={<Products/>}/>
          <Route path='/products/accessories' element={<Products/>}/>
          <Route path='/products/home-living' element={<Products/>}/>
          <Route path='/products/tech-travel' element={<Products/>}/>
          <Route path='/products/fun-gifts' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {items.map((item,index) =>
            <>
              <Route path={'/details/'+item.sku} element={<Details/>}/>
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
