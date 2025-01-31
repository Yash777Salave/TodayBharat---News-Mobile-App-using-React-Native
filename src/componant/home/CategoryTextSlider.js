import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Color from '../../style/Color';

const CategoryTextSlider = () => {
  const [active, setActive] = useState(1);
  const categories = [
    {
      id: 1,
      name: 'Latest',
    },
    {
      id: 2,
      name: 'World',
    },
    {
      id: 3,
      name: 'Business',
    },
    {
      id: 4,
      name: 'Sports',
    },
    {
      id: 5,
      name: 'Life',
    },
    {
      id: 6,
      name: 'Movies',
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity key={item.id} onPress={() => setActive(item.id)}>
            <Text
              style={
                active == item.id
                  ? styles.inActiveCategorylist
                  : styles.activeCategorylist
              }>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryTextSlider;

const styles = StyleSheet.create({
  activeCategorylist: {
    // margin: 12,
    // bottom: 10,
    marginRight: 20,
    fontSize: 20,
    fontWeight: '700',
    color: Color.grey,
  },
  inActiveCategorylist: {
    // margin: 12,
    // bottom: 10,
    marginRight: 20,
    fontSize: 20,
    fontWeight: '900',
    color: Color.primary,
  },
});
