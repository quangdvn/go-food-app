import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const MainItem = ({ item, navigation }) => {
  const renderRating = (item) => {
    let rating = [];
    for (let i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('../../assets/images/star.png')}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode='cover'
          key={i}
        />
      );
    }
    return rating;
  };

  return (
    <LinearGradient
      colors={Colors.gradient}
      start={[0, 1]}
      end={[1, 0]}
      style={styles.listItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{item.name}</Text>
        <View style={styles.rating}>{renderRating(item.rating)}</View>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text style={styles.priceText}>{item.price}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RestaurantDetail', { item })}>
        <AntDesign name='arrowright' color='green' size={20} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  content: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  priceText: {
    color: 'green',
    fontSize: 15,
    fontFamily: 'open-sans-bold',
  },
});

export default MainItem;
