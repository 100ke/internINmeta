// import logo from './logo.svg';
import './App.css';
import Product_card from './component/Product_card.js';
import Header from './component/Header.js';
import CardList from './component/CardList.js';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './context/CardContext.js';
import CardRegistration from './component/CardRegistration.js';

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    // <div className="App">
    //   <Header cartCount={cartCount}></Header>
    //   <Container>
    //     <div className='list'>
    //       <h2>신발 상품 목록</h2>
    //       <span>현재 6개의 상품이 있습니다.</span>
    //       <Row>
    //         <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
    //         <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
    //         <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
    //         <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
    //         <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
    //         <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
    //       </Row>
    //     </div>
    //   </Container>
    // </div>
    <CardProvider>
      <Router>
        <Routes>
          <Route path="/internINmeta" element={
            <>
              <Header cartCount={cartCount}></Header>
              <Container>
                <div className='list'>
                  <h2>신발 상품 목록</h2>
                  <span>현재 6개의 상품이 있습니다.</span>
                  <Row>
                    <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
                    <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
                    <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
                    <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
                    <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
                    <Col xs={6} md={6} lg={4}><Product_card setCartCount={setCartCount}></Product_card></Col>
                  </Row>
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
