import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { data } from '../data/data_all';

const All = ({ navigation }) => {
  const [listData, setListData] = useState(data);
  const [tempData, setTempData] = useState(data);
  const [searchText, setSearchText] = useState('');

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
          onPress={() => navigation.navigate('Detail', { item })}>
          <AntDesign name='arrowright' color='green' size={20} />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  const searchRestaurant = text => {
    let searchData = [];
    tempData.map(res => {
      if (res.name.indexOf(text) > -1) {
        searchData.push(res);
      }
    });
    setListData(searchData);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Search ...'
          style={styles.search}
          value={searchText}
          onChangeText={value => searchRestaurant(value)}
        />
        <TouchableOpacity
          onPress={() => setSearchText('')}
          style={styles.closeIcon}>
          <Ionicons name='ios-close' color='gray' size={20} />
        </TouchableOpacity>
      </View>
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
    marginBottom: 10
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginVertical: 10
  },
  search: {
    flex: 1,
    marginLeft: 10
  },
  closeIcon: {
    paddingHorizontal: 10
  }
});

export default All;
