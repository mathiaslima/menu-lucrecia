import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Text } from 'react-native';
import PostHeaderLUCC from '../Organisms/PostHeaderLUCC';

test('Test component Post Header - expect text', async () => {
  // Test component text - expect text component
  const configText = {
    title: 'Test text',
    icon: <Text>@</Text>,
  };

  const { getByText } = render(<PostHeaderLUCC title={configText.title} icon={configText.icon} />);

  await waitFor(() => expect(getByText(configText.title)).toBeTruthy());
});
