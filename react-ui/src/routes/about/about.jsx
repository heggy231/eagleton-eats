import Container from "react-bootstrap/Container";
import { Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <div id="portrait">
    <Container>
      <Col xs={6} md={4}>
        <Image
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFaLCpu0JWG6A/profile-displayphoto-shrink_800_800/0/1624842284126?e=1633564800&v=beta&t=seaxieLlHFi2qEo6CEoDHxXzAJR0aKKy6cHjW41usMU"
          roundedCircle
        />
      </Col>
    </Container>
    <div id="about">
        Junior Web-Developer, with experience with Java-script and React-Redux.
    </div>
    </div>
  );
};

export default About;
