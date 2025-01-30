import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryTextSlider from '../componant/home/CategoryTextSlider';
import color from '../style/Color';

const Home = () => {
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.HeadingComponant}>
        <Text style={styles.heading}>TodayBharat News</Text>
        <Image
          source={require('../assets/notification.png')}
          style={styles.bellIcon}
        />
      </View>
      <CategoryTextSlider />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HeadingComponant: {
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainConatiner: {
    // flex: 1,
    margin: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: color.primary,
  },
  bellIcon: {
    height: 25,
    width: 25,
  },
});
