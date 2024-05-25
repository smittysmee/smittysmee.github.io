import React from 'react';
import { Container, Row, Col ***REMOVED*** from 'react-bootstrap';

const HomeContainer: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>About ButterFlat.io</h2>
          <p>Your go-to platform for flat, simple, and elegant design templates.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Expertise</h2>
          <p>We specialize in building software for companies by leveraging novel ideas to tackle harder solutions. With a focus on AI products, we strive to push the boundaries of technology and innovation.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Templates</h2>
          <p>Explore our wide range of templates for various needs.</p>
        </Col>
      </Row>
    </Container>
  );
***REMOVED***

export default HomeContainer;
