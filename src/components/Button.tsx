import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

interface ButtonProps {
  variant: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <BootstrapButton variant={variant} onClick={onClick}>
      {children}
    </BootstrapButton>
  );
};

export default Button;
