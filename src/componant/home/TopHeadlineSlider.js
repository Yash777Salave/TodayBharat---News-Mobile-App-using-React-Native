import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalApi from '../../service/GlobalApi';
import Color from '../../style/Color';

const TopHeadlineSlider = () => {
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
    <View style={styles.MainContainer}>
      <FlatList
        horizontal
        data={newsList}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.newsListContainer}>
            <Image source={{uri: item.urlToImage}} style={styles.NewsImages} />
            <Text numberOfLines={3} style={styles.sourceTitle}>{item.title}</Text>
            <Text style={styles.sourceName}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadlineSlider;

const styles = StyleSheet.create({
  MainContainer:{
marginTop:14
  },
  NewsImages: {
    height: Dimensions.get('screen').width * 0.77,
    borderRadius: 10,
  },
  newsListContainer: {
    width: Dimensions.get('screen').width * 0.8,
    marginRight: 15,
  },
  sourceName: {
    fontSize: 15,
    color: Color.primary,
  },
  sourceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
});
