import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Copyright 2021</Nav.Link>
            <Nav.Link href="/">Credits</Nav.Link>
            <Nav.Link
              href="https://github.com/JKhariD/eagleton-eats"
              target="_blank"
            >
              Github
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
