import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryTextSlider from '../componant/home/CategoryTextSlider';
import color from '../style/Color';
import TopHeadlineSlider from '../componant/home/TopHeadlineSlider';
import GlobalApi from '../service/GlobalApi';
import Headline from '../componant/home/Headline';

const Home = () => {
    const [newsList, setNewsList] = useState([]);
  
    const getTopHeadline = async () => {
      const result = (await GlobalApi.getTopHeadline).data;
      console.log(result);
      setNewsList(result.articles);
      // console.log('hello');
    };
    useEffect(() => {
      getTopHeadline();
    }, []);
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
      {/* top headline slider */}
      <TopHeadlineSlider newsList ={newsList}/>
      <Headline newsList = {newsList}/>
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
