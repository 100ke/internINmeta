import './App.css';
import React from 'react';
import CardList from './component/CardList.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './context/CardContext.js';
import CardRegistration from './component/CardRegistration.jsx';
import Cart from './component/Cart.jsx';
import MainPage from './component/MainPage.jsx';
import ProductDetail from './component/ProductDetail.jsx';
import PayComplete from './component/PayComplete.jsx';

function App() {

  return (
    <Router>
        <CardProvider>
        <Routes>
          <Route path="/internINmeta" element={<MainPage/>}/>
          <Route path="/internINmeta/addcard" element={<CardRegistration/>}/>
          <Route path="/internINmeta/cardlist" element={<CardList/>}/>
          <Route path="/internINmeta/cart" element={<Cart/>}/>
          <Route path="/internINmeta/product/:id" element={<ProductDetail/>}/>
          <Route path="/internINmeta/paycomplete" element={<PayComplete/>}/>
        </Routes>
      </CardProvider>
    </Router>
  );
}

export default App;
