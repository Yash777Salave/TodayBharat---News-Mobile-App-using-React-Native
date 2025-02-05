import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Color from '../style/Color';
import Share from 'react-native-share';

const ReadNews = () => {
    
  const newsObj = useRoute().params.news;
  const navigation = useNavigation();

  const shareOption = async () => {
    const shareOption = {
      message: 'we are sharing it now',
    };
    try {
      const shareResponse = await Share.open(shareOption);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.IconsCOnatiner}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../assets/back.png')} style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            shareOption();
          }}>
          <Image source={require('../assets/share.png')} style={styles.Icons} />
        </TouchableOpacity>
      </View>
      <Image source={{uri: newsObj.urlToImage}} style={styles.NewsImage} />
      <View style={styles.textContainer}>
        <Text style={styles.Title}>{newsObj.title}</Text>
        <Text style={styles.source}>{newsObj.source?.name}</Text>
        <Text style={styles.description}>{newsObj.description}</Text>
        <Text style={styles.readMore}>Read More</Text>
      </View>
    </View>
  );
};

export default ReadNews;

const styles = StyleSheet.create({
  NewsImage: {
    height: 300,
    width: '95%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },

  mainContainer: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  Title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textContainer: {
    margin: 10,
  },
  source: {
    fontSize: 16,
    color: Color.primary,
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
    marginTop: 10,
    color: Color.grey,
  },
  readMore: {
    fontSize: 16,
    marginTop: 10,
    color: Color.primary,
    fontWeight: '900',
  },
  Icons: {
    height: 25,
    width: 25,
  },
  IconsCOnatiner: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 8,
  },
});
