import {StyleSheet} from 'react-native';

const appStyles = StyleSheet.create({
  root: {
    backgroundColor: '#fefefe',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // headlines
  h1: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: '600',
  },

  // containers
  container: {
    paddingHorizontal: 20,
  },
  floatContainer: {
    width: '100%',
    maxWidth: 300,
    paddingHorizontal: 20,
  },

  // sections
  section: {
    marginVertical: 20,
  },

  // form
  formErrors: {
    marginVertical: 5,
  },
  formError: {
    color: '#cc0011',
  },
});

export default appStyles;
