import React from 'react';
import Landing from './pages/landing.jsx';
import Details from './pages/productDetails.jsx';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import items from "./components/ProductCard/products.json";
import Products from './pages/ProductGrid.jsx';
import Footer from './components/Footer/footer.jsx';
import Results from './pages/searchResults.jsx';
import Header from './components/Header/header.jsx';
import Cart from './pages/cartPage.jsx';
import Checkout from './pages/checkout.jsx';
import Complete from './pages/orderComplete.jsx';
import UnderConstruction from './pages/underCon.jsx';

function App() {

  return (
    <div> {/* Wrapper div for the entire application */}
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/products/all' element={<Products />} />
          <Route path='/products/clothing' element={<Products />} />
          <Route path='/products/accessories' element={<Products />} />
          <Route path='/products/home-living' element={<Products />} />
          <Route path='/products/tech-travel' element={<Products />} />
          <Route path='/products/fun-gifts' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Results/>}/>
          <Route path='/cart/checkout' element={<Checkout/>}/>
          <Route path='/cart/complete' element={<Complete/>}/>
          <Route path='/underconstruction' element={<UnderConstruction/>}/>

          {items.map((item, index) => (
            <Route key={index} path={`/details/${item.sku}`} element={<Details item={item} />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
