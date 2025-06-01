import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RiShoppingBagLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartCountState } from '../recoil/cart';

function Header() {
  const navigate = useNavigate();
  const cartCount = useRecoilValue(cartCountState);

  const handleCardClick = () => {
    navigate('/internINmeta/cart')
  }
  const handleLogoClick = () => {
    navigate('/internINmeta')
  }

  return (
    <Navbar bg='dark' data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
      <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand href="#" className='brand' onClick={handleLogoClick}>Shooking</Navbar.Brand>
        <div className='position-relative'>
          <button type="button"  className='cart btn' onClick={handleCardClick}>
            <RiShoppingBagLine size={25} />
            {cartCount > 0 && (
              <span className='position-absolute badge rounded-pill bg-danger justify-content-center align-items-center'>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </Container>
    </Navbar>
  )

}

export default Header;