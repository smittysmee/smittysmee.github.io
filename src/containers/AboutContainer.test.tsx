import React from 'react';
import { render } from '@testing-library/react';
import AboutContainer from './AboutContainer';

test('renders the AboutContainer component', () => {
  const { getByText } = render(<AboutContainer />);
  expect(getByText(/Our Story/i)).toBeInTheDocument();
  expect(getByText(/Our Mission/i)).toBeInTheDocument();
});
