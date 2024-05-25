import React from 'react';
import { Container, Row, Col ***REMOVED*** from 'react-bootstrap';

const AboutContainer: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Our Story</h2>
          <p>ButterFlat.io was founded with the mission to provide easy-to-use, aesthetically pleasing design templates for everyone.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Mission</h2>
          <p>We aim to build innovative software solutions for companies, leveraging novel ideas to address complex challenges. Our focus on AI products allows us to deliver cutting-edge technology that drives progress and efficiency.</p>
        </Col>
      </Row>
    </Container>
  );
***REMOVED***

export default AboutContainer;
