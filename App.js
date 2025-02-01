import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    backgroundColor: '#ffff',
  },
});
