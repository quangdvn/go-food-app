import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { data } from '../data/data_all';

const All = ({ navigation }) => {
  const [listData, setListData] = useState(data);
  console.log(listData);

  const renderRating = item => {
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

  const renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={['#009245', '#8cc631']}
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
          onPress={() => navigation.navigate('Detail')}>
          <AntDesign name='arrowright' color='green' size={20} />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={listData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5
  },
  listContainer: {
    flex: 1
  },
  listItem: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 10
  },
  imageContainer: {
    width: 90,
    height: 90
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  content: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row'
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  priceText: {
    color: 'green',
    fontSize: 15,
    fontFamily: 'open-sans-bold'
  }
});

export default All;
