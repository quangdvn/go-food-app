import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { data } from '../data/data_popular';

const PopularSection = () => {
  const [popularList, setPopularList] = useState(data);

  const popularSeparatorComponent = () => {
    return <View style={{ height: 30 }} />;
  };

  const renderRating = item => {
    let rating = [];
    for (let i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('../../assets/images/star2.png')}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode='cover'
          key={i}
        />
      );
    }
    return rating;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          {renderRating(item.rating)}
        </View>
        <Text numberOfLines={2} style={styles.comment}>
          "{item.comment}"
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={popularList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={popularSeparatorComponent}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 20
  },
  item: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'green'
  },
  name: {
    color: 'green',
    fontFamily: 'open-sans-bold'
  },
  comment: {
    fontStyle: 'italic',
    fontFamily: 'open-sans',
    marginTop: 5
  }
});

export default PopularSection;
