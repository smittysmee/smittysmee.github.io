import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactContainer from './ContactContainer';

test('renders the ContactContainer component', () => {
  const { getByLabelText, getByText } = render(<ContactContainer />);
  expect(getByText(/Get in Touch/i)).toBeInTheDocument();
  expect(getByLabelText(/Name:/i)).toBeInTheDocument();
  expect(getByLabelText(/Email:/i)).toBeInTheDocument();
  expect(getByLabelText(/Message:/i)).toBeInTheDocument();
});

test('submits the form', () => {
  const { getByLabelText, getByText } = render(<ContactContainer />);
  const nameInput = getByLabelText(/Name:/i);
  const emailInput = getByLabelText(/Email:/i);
  const messageInput = getByLabelText(/Message:/i);
  const submitButton = getByText(/Submit/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
  fireEvent.click(submitButton);

  // Add assertions as needed, such as checking if a form submission callback was called
});
