import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';

import Login from '../Login';

const flushMicrotasksQueue = () => {
  return new Promise(resolve => setImmediate(resolve));
};

it('renders default elements', () => {
  const result = render(<Login />);

  expect(result.getAllByText('Login').length).toBe(2);
  result.getByPlaceholderText('user@example.com');
  result.getByPlaceholderText('password');
});

it('show form errors', () => {
  const result = render(<Login />);

  fireEvent.press(result.getByTestId('Login.submitButton'));

  result.getByText('Invalid username');
  result.getByText('Invalid password');
});

it('show invalid user name error message', () => {
  const result = render(<Login />);

  fireEvent.changeText(result.getByTestId('Login.passwordInput'), 'password');

  fireEvent.press(result.getByTestId('Login.submitButton'));

  result.getByText('Invalid username');
  expect(result.queryAllByText('Invalid password').length).toBe(0);
});

it('show invalid password error message', () => {
  const result = render(<Login />);

  fireEvent.changeText(
    result.getByTestId('Login.usernameInput'),
    'user@example.com',
  );

  fireEvent.press(result.getByTestId('Login.submitButton'));

  result.getByText('Invalid password');
  expect(result.queryAllByText('Invalid username').length).toBe(0);
});

it('handles submit with valid inputs', async () => {
  fetch.mockResponseOnce(JSON.stringify({success: true}));

  const replaceMock = jest.fn();

  const result = render(<Login navigation={{replace: replaceMock}} />);

  fireEvent.changeText(
    result.getByTestId('Login.usernameInput'),
    'user@example.com',
  );
  fireEvent.changeText(result.getByTestId('Login.passwordInput'), 'password');
  fireEvent.press(result.getByTestId('Login.submitButton'));

  await act(flushMicrotasksQueue);

  expect(fetch.mock.calls).toMatchSnapshot();
  expect(replaceMock).toBeCalledWith('Home');
});
