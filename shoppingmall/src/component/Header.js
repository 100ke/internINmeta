import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RiShoppingBagLine } from "react-icons/ri";
import React from 'react';

function Header({cartCount}) {
    return (
    <Container>
        <Navbar bg='dark' data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
          <Container className='d-flex justify-content-between align-items-center'>
            <Navbar.Brand href="#" className='brand'>Navbar</Navbar.Brand>
            <div className='position-relative'>
              <a className='cart btn'>
                <RiShoppingBagLine size={25} />
                {cartCount > 0 && (
                  <span className='position-absolute badge rounded-pill bg-danger justify-content-center align-items-center'>
                    {cartCount}
                  </span>
                )}
              </a>
            </div>
          </Container>
        </Navbar>
    </Container>
    )

}

export default Header;