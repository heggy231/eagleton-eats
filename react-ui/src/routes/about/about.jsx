import Container from "react-bootstrap/Container";
import { Col, Image, Row } from "react-bootstrap";
import "./style.css"
import Heggy from "./heggy-github.png";

const About = () => {
  return (
    <div id="portrait">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={7} md={4} lg={3}>
            <div className="image-container">
              <Image
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFaLCpu0JWG6A/profile-displayphoto-shrink_800_800/0/1624842284126?e=1633564800&v=beta&t=seaxieLlHFi2qEo6CEoDHxXzAJR0aKKy6cHjW41usMU"
                roundedCircle
              />
            </div>
            <div>
            Junior Web-Developer, with experience with Java-script and React-Redux.
            </div>
          </Col>
          <Col xs={7} md={4} lg={3}>
            <div className="image-container">
              <Image
                src={Heggy}
                roundedCircle
              />
            </div>
            <div>
            Junior Web-Developer, with experience with Java-script and React-Redux.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
