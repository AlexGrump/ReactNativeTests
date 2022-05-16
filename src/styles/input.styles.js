import {StyleSheet} from 'react-native';

const inputStyles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f4f6f8',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#f4f6f8',
  },
  inputContainerError: {
    borderColor: '#cc0011',
  },
  inputLabel: {
    fontSize: 10,
    color: '#b4b6b8',
  },
  input: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 3,
    marginRight: 10,
  },
});

export default inputStyles;
