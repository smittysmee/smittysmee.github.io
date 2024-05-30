import React from 'react';
import { render } from '@testing-library/react';
import HomeContainer from './HomeContainer';

test('renders the HomeContainer component', () => {
  const { getByText } = render(<HomeContainer />);
  expect(getByText(/About ButterFlat.io/i)).toBeInTheDocument();
  expect(getByText(/Our Expertise/i)).toBeInTheDocument();
  expect(getByText(/Our Templates/i)).toBeInTheDocument();
});
