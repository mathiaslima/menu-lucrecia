import React from 'react';
import { Text, View } from 'react-native';
import TextLUCC from '../../Atoms/TextLUCC';

function PublishScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextLUCC h1 bold>
        Em Breve!
      </TextLUCC>
    </View>
  );
}

export default PublishScreen;
