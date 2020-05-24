import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const MainItem = ({ item, navigation }) => {
  const renderRating = item => {
    let rating = [];
    for (let i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('../../assets/images/star.png')}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode="cover"
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
      style={styles.listItem}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{item.name}</Text>
        <Image
          source={require('../../assets/images/stars/small/small_5.png')}
          style={{ width: 120, height: 20, marginRight: 3 }}
          resizeMode="stretch"
        />
        <Text style={styles.priceText}>$$ . Pizza, Bakeries</Text>
        <Text style={styles.addressText}>123 Frank Street</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RestaurantDetail', { item })}
      >
        <AntDesign name="arrowright" color="green" size={20} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
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
    justifyContent: 'space-between',
    paddingLeft: 10,
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
    marginTop: -15,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  priceText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'open-sans',
    marginBottom: -5
  },
  addressText: {
    color: Colors.default,
    fontSize: 15,
    fontFamily: 'open-sans',
    marginBottom: -5
  },
});

export default MainItem;
