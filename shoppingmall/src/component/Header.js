import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RiShoppingBagLine } from "react-icons/ri";

function Header() {
    return (
    <Container>
        <Navbar bg='dark' data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <a className='cart btn'><RiShoppingBagLine size={25} /></a>
          </Container>
        </Navbar>
    </Container>
    )

}

export default Header;