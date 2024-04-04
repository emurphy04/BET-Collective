import React from 'react';
import Landing from './pages/landing.jsx';
import Details from './pages/productDetails.jsx'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import items from "./components/ProductCard/products.json"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
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
