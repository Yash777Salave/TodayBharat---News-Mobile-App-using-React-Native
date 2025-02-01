import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Color from '../../style/Color';

const Headline = ({newsList}) => {
  return (
    <View>
      <View style={{borderTopWidth: 1, borderTopColor: '#A8A8A8'}}></View>

      <FlatList
        data={newsList}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity style={styles.HeadlineContainer}>
              <Image
                source={{uri: item.urlToImage}}
                style={styles.headlineImg}
              />
              <View>
                <Text numberOfLines={3} style={styles.newsText}>
                  {item.title}
                </Text>
                <Text style={styles.sourceName}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={{borderTopWidth: 1, borderTopColor: '#A8A8A8'}}></View>
          </View>
        )}
      />
    </View>
  );
};

export default Headline;

const styles = StyleSheet.create({
  headlineImg: {
    height: 120,
    width: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  HeadlineContainer: {
    marginTop: 10,
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  newsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 130,
    marginLeft: 9,
  },
  sourceName: {
    color: Color.primary,
    fontSize: 15,
    marginLeft: 9,
  },
});
