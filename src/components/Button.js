import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import buttonStyles from '../styles/button.styles';

export default function Button({style, labelStyle, children, ...props}) {
  return (
    <TouchableOpacity style={[buttonStyles.button, style]} {...props}>
      <Text style={[buttonStyles.buttonLabel, labelStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}
