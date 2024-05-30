import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactContainer: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Get in Touch</h2>
          <p>If you have any questions or would like to learn more about our services, please reach out to us using the form below.</p>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactContainer;
