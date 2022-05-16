import {Text, View} from 'react-native';
import React from 'react';
import appStyles from '../styles/app.styles';

export default function FormErrors({errors, style, ...props}) {
  return (
    <View style={[appStyles.formErrors, style]} {...props}>
      {errors.map((msg, index) => (
        <Text key={index} style={appStyles.formError}>
          {msg}
        </Text>
      ))}
    </View>
  );
}
