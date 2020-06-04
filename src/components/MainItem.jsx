import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import StarImages from '../utils/renderRating';

const MainItem = ({ item, navigation }) => {
  const renderCategories = categories => {
    let returnData = '';
    const newData = categories.map(item => item.title);

    newData.forEach((item, index) => {
      if (index === newData.length - 1) returnData = returnData + item;
      else returnData = returnData + item + ', ';
    });

    return returnData;
  };
  const imageDefault = 'https://i.ibb.co/VgMK3t0/restaurant-default.png';
  // const renderAddress = address => {
  //   let returnData = '';

  //   address.forEach((item, index) => {
  //     if (index === address.length - 1) returnData = returnData + item;
  //     else returnData = returnData + item + ', ';
  //   });

  //   return returnData;
  // };

  const imageUrl = item.image_url;

  return (
    <LinearGradient
      colors={Colors.gradient}
      start={[0, 1]}
      end={[1, 0]}
      style={styles.listItem}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.image_url ? item.image_url : imageDefault,
          }}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.content}>
          {item.name}
        </Text>
        <Image
          source={StarImages[item.rating]}
          style={{ width: 120, height: 20, marginRight: 3 }}
          resizeMode="stretch"
        />
        <Text numberOfLines={1} style={styles.priceText}>
          {item.price ? item.price + ' . ' : null}
          {''}
          {renderCategories(item.categories)}
        </Text>
        <Text numberOfLines={1} style={styles.addressText}>
          {item.location.address1 + ', ' + item.location.city}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('RestaurantDetail', { mainItem: item })
        }
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
    marginBottom: -5,
  },
  addressText: {
    color: Colors.default,
    fontSize: 15,
    fontFamily: 'open-sans',
    marginBottom: -5,
  },
});

export default MainItem;
