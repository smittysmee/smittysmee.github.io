import React from 'react';
import { render ***REMOVED*** from '@testing-library/react';
import Footer from './Footer';

test('renders the Footer component', () => {
  const { getByText ***REMOVED*** = render(<Footer />);
  expect(getByText(/© 2024 ButterFlat.io. All rights reserved./i)).toBeInTheDocument();
***REMOVED***);
