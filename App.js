import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './src/Navigations/HomeNavigation';

const App = () => {
  return (
    // <SafeAreaView style={styles.mainContainer}>
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    backgroundColor: '#ffff',
  },
});
