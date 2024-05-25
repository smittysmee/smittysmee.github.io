import React from 'react';
import { render ***REMOVED*** from '@testing-library/react';
import { BrowserRouter as Router ***REMOVED*** from 'react-router-dom';
import Header from './Header';

test('renders the Header component', () => {
  const { getByAltText, getByText ***REMOVED*** = render(
    <Router>
      <Header />
    </Router>
  );
  expect(getByAltText(/ButterFlat.io logo/i)).toBeInTheDocument();
  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/About/i)).toBeInTheDocument();
  expect(getByText(/Contact/i)).toBeInTheDocument();
***REMOVED***);
