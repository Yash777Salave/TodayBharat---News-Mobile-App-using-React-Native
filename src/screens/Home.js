import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryTextSlider from '../componant/home/CategoryTextSlider';
import color from '../style/Color';
import TopHeadlineSlider from '../componant/home/TopHeadlineSlider';
import GlobalApi from '../service/GlobalApi';
import Headline from '../componant/home/Headline';
import Color from '../style/Color';

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    console.log(result);
    setNewsList(result.articles);
    // console.log('hello');
  };
  useEffect(() => {
    // getTopHeadline();
    getNewsByCategory('latest');
  }, []);

  const getNewsByCategory = async category => {
    setLoading(true);
    const result = (await GlobalApi.getByCategories(category)).data;
    console.log(result, 'category-----');
    setNewsList(result.articles);
    setLoading(false);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainConatiner}>
      <View style={styles.HeadingComponant}>
        <Text style={styles.heading}>TodayBharat News</Text>
        <Image
          source={require('../assets/notification.png')}
          style={styles.bellIcon}
        />
      </View>
      <View>
        <CategoryTextSlider
          onCategoryCLick={category => {
            getNewsByCategory(category);
          }}
        />
        {loading ? (
          <ActivityIndicator
            size={'large'}
            color={Color.primary}
            style={{marginTop: Dimensions.get('screen').height * 0.4}}
          />
        ) : (
          <>
            <TopHeadlineSlider newsList={newsList} />
            <Headline newsList={newsList} />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  HeadingComponant: {
    // borderWidth: 1,
    // padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  mainConatiner: {
    // flex: 1,
    // margin: 10,
    padding: 10,
    backgroundColor: '#ffff',
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
