import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import ButtonLUCC from '../Molecules/ButtonLUCC';

test('Test of click button component', async () => {
  const mockFn = jest.fn();
  const configButton = {
    title: 'Click me',
  };

  const { getByText } = render(
    <ButtonLUCC onPress={mockFn} title={configButton.title} center h5 bold white />
  );

  const button = getByText(configButton.title);
  fireEvent.press(button);

  await waitFor(() => expect(getByText(configButton.title)).toBeTruthy());
  expect(mockFn.mock.calls.length).toBe(1);
});
