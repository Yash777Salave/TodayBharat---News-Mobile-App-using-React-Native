import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CategoryTextSlider = () => {
  const categories = [
    {
      id: 1,
      name: 'Sports',
    },
    {
      id: 2,
      name: 'Life',
    },
    {
      id: 3,
      name: 'Movie',
    },
    {
      id: 4,
      name: 'Latest',
    },
    {
      id: 5,
      name: 'World',
    },
    {
      id: 1,
      name: 'Business',
    },
  ];
  return (
    <View>
      <Text>CategoryTextSlider</Text>
    </View>
  );
};

export default CategoryTextSlider;

const styles = StyleSheet.create({});
