import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const RestaurantDetailScreen = ({ navigation }) => {
  const { image, price, name } = navigation.getParam('item');

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        source={require('../../../../assets/images/header_detail.png')}
        style={styles.imageBackground}
        resizeMode='stretch'>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.backButton}>
          <Ionicons
            name='ios-arrow-round-back'
            color='white'
            size={40}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ImageBackground>
      <ScrollView style={styles.footer}>
        <View style={styles.status}>
          <Text style={styles.statusText}>AVAILABLE</Text>
        </View>
        <Text style={styles.priceText}>{price}</Text>
        <Text numberOfLines={2} style={styles.nameText}>
          {name}
        </Text>
        <Text style={styles.detailText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
          deleniti. Provident, tenetur. Expedita corporis repudiandae rerum enim
          at quidem distinctio voluptatum. Tempore totam nihil voluptate quas
          fuga nisi consequatur mollitia.
        </Text>
        <LinearGradient
          colors={['#009245', '#8cc631']}
          start={[0, 1]}
          end={[1, 0]}
          style={styles.button}>
          <Text style={styles.orderText}>ORDER NOW</Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;
const imageHeight = screenHeight * 0.5 * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    paddingHorizontal: 40
  },
  imageContainer: {
    backgroundColor: 'white',
    width: imageHeight,
    height: imageHeight,
    marginTop: imageHeight / 3,
    borderRadius: imageHeight / 2
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: imageHeight / 2
  },
  backButton: {
    position: 'absolute',
    left: 0,
    marginTop: 35,
    marginLeft: 20
  },
  status: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    padding: 3,
    borderColor: 'green'
  },
  statusText: {
    color: 'green',
    fontSize: 15,
    fontFamily: 'open-sans-bold'
  },
  priceText: {
    color: 'green',
    fontSize: 30,
    fontFamily: 'open-sans-bold'
  },
  nameText: {
    color: '#3e3c3e',
    fontSize: 45,
    fontFamily: 'open-sans-bold'
  },
  detailText: {
    color: 'gray'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 20
  },
  orderText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});

export default RestaurantDetailScreen;
