import {Text, TextInput, View} from 'react-native';
import React from 'react';
import inputStyles from '../styles/input.styles';

export default function Input({label, error, ...props}) {
  const containerStyles = [inputStyles.inputContainer];

  if (error) {
    containerStyles.push(inputStyles.inputContainerError);
  }

  return (
    <View style={containerStyles}>
      <Text style={inputStyles.inputLabel}>{label}</Text>
      <TextInput autoCapitalize="none" style={inputStyles.input} {...props} />
    </View>
  );
}
