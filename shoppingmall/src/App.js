import './App.css';
import Header from './component/Header.js';
import CardList from './component/CardList.js';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './context/CardContext.js';
import CardRegistration from './component/CardRegistration.js';
import ProductList from './component/ProductList.js';
import { useRecoilValue } from 'recoil';
import { productCountState } from './recoil/products.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const productCount = useRecoilValue(productCountState);

  return (
    <CardProvider>
      <Router>
        <Routes>
          <Route path="/internINmeta" element={
            <>
              <Header cartCount={cartCount}></Header>
              <Container>
                <div className='list'>
                  <h2>신발 상품 목록</h2>
                  <span>현재 {productCount}개의 상품이 있습니다.</span>
                  <ProductList setCartCount={setCartCount}/>
                </div>
              </Container>
            </>
          }/>
          <Route path="/internINmeta/addcard" element={<CardRegistration/>}/>
          <Route path="/internINmeta/cardlist" element={<CardList/>}/>
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
