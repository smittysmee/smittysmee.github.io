import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders the Header component', () => {
  const { getByAltText, getByText } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(getByAltText(/ButterFlat.io logo/i)).toBeInTheDocument();
  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/About/i)).toBeInTheDocument();
  expect(getByText(/Contact/i)).toBeInTheDocument();
});
