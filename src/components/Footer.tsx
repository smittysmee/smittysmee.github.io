import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>&copy; 2024 ButterFlat.io. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
