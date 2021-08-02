//import { Link } from "react-bootstap/Link";
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Greeting from "../../components/greeting";



const Header = () => {

    return (
        
        <header>
            <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Eagleton Eats</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/menu">Menu</Nav.Link>
      <Nav.Link href="/order">Cart</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
            <Greeting />
        </header>
    );
};

export default Header; 