import React from 'react';
import { Button as BootstrapButton ***REMOVED*** from 'react-bootstrap';

interface ButtonProps {
  variant: string;
  onClick: () => void;
***REMOVED***

const Button: React.FC<ButtonProps> = ({ variant, onClick, children ***REMOVED***) => {
  return (
    <BootstrapButton variant={variant***REMOVED*** onClick={onClick***REMOVED***>
      {children***REMOVED***
    </BootstrapButton>
  );
***REMOVED***;

export default Button;
