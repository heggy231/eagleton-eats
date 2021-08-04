import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  return (
    <header className='fixed-top' style={{ height: '60px' }}>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Eagleton Eats
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart ({props.numCartitems})
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

const mapStateToProps = (state) => ({
  numCartitems: state.cartReducer.cartItems.length,
});

export default connect(mapStateToProps, null)(Header);
