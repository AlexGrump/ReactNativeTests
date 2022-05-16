import {SafeAreaView, View} from 'react-native';
import React from 'react';
import appStyles from '../styles/app.styles';
import Button from '../components/Button';

const Home = props => {
  return (
    <SafeAreaView style={appStyles.root}>
      <View style={appStyles.floatContainer}>
        <Button onPress={() => props.navigation.replace('Login')}>
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
