import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => {
  const item = navigation.getParam('item');

  console.log(item);

  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailScreen;
