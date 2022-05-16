import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Button from '../Button';

it('renders default elements', () => {
  render(<Button>Press me</Button>);
});

it('display correct label on the button', () => {
  const result = render(
    <>
      <Button>I'm button</Button>
      <Button>Press me</Button>
    </>,
  );

  result.getByText("I'm button");
  result.getAllByText('Press me');
});

it('onPress callback is handled', () => {
  const onPressMock = jest.fn();
  const result = render(
    <Button testID="press-me-button" onPress={onPressMock}>
      Press me
    </Button>,
  );

  fireEvent.press(result.getByTestId('press-me-button'));
  expect(onPressMock).toHaveBeenCalled();
});

it('onPress callback is not handled for disabled', () => {
  const onPressMock = jest.fn();
  const result = render(
    <Button testID="press-me-button" onPress={onPressMock} disabled>
      I'm disabled
    </Button>,
  );

  fireEvent.press(result.getByTestId('press-me-button'));
  expect(onPressMock).toBeCalledTimes(0);
});
