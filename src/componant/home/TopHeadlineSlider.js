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
import {useNavigation} from '@react-navigation/native';

const TopHeadlineSlider = ({newsList}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newsList}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.newsListContainer}
            onPress={() => {
              navigation.navigate('ReadNews',{news:item});
            }}>
            <Image source={{uri: item.urlToImage}} style={styles.NewsImages} />
            <Text numberOfLines={3} style={styles.sourceTitle}>
              {item.title}
            </Text>
            <Text style={styles.sourceName}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadlineSlider;

const styles = StyleSheet.create({
  MainContainer: {
    marginTop: 14,
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
    marginBottom: 18,
  },
  sourceTitle: {
    fontSize: 22,
    fontWeight: '800',
  },
});
