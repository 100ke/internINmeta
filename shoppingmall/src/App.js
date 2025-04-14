import logo from './logo.svg';
import './App.css';
import Product_card from './component/Product_card.js';
import Header from './component/Header.js';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <div className='list'>
          <h2>신발 상품 목록</h2>
          <text>현재 6개의 상품이 있습니다.</text>
          <Row>
            <Col xs={6} md={6} lg={4}><Product_card></Product_card></Col>
            <Col xs={6} md={6} lg={4}><Product_card></Product_card></Col>
            <Col xs={6} md={6} lg={4}><Product_card></Product_card></Col>
            <Col xs={6} md={6} lg={4}><Product_card></Product_card></Col>
            <Col xs={6} md={6} lg={4}><Product_card></Product_card></Col>
            <Col xs={6} md={6} lg={4}><Product_card></Product_card></Col>
          </Row>
        </div>
        
      </Container>
      
    </div>
  );
}

export default App;
