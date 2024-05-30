import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders the Footer component', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/© 2024 ButterFlat.io. All rights reserved./i)).toBeInTheDocument();
});
