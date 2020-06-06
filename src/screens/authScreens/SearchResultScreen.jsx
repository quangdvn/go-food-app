import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import MainItem from './../../components/MainItem';
import { getSearchByKeyword } from '../../api/goFoodApi';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const SearchResultScreen = ({ navigation }) => {
  const { keyword } = navigation.state.params;

  const [restaurantList, setRestaurantList] = useState(null);

  const [isLoading, setLoading] = useState(null);

  const getListRestaurant = async () => {
    try {
      setLoading(true);
      const { data } = await getSearchByKeyword(keyword);
      setLoading(false);
      setRestaurantList(data.details);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListRestaurant();
  }, []);

  const renderResult = () => {
    if (isLoading == true) {
      return <ActivityIndicator size="large" color={Colors.primary} />;
    } else if (
      restaurantList &&
      restaurantList.length != 0 &&
      isLoading == false
    ) {
      return (
        <FlatList
          data={restaurantList}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <MainItem item={item} key={index} navigation={navigation} />
          )}
          style={{ marginBottom: 20 }}
          ScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      );
    } else if (restaurantList && restaurantList.length == 0) {
      return (
        <Text style={{ fontFamily: 'open-sans', fontSize: 16 }}>
          No result found ...
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="md-arrow-round-back"
          size={30}
          color={Colors.primary}
          style={{
            marginHorizontal: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.text}>The Result of keyword: </Text>
        <Text style={styles.keyword}> "{keyword}"</Text>
      </View>

      <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
        {renderResult()}
      </View>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Colors.primary,
  },
  keyword: {
    fontFamily: 'open-sans',
    fontSize: 19,
    color: Colors.primary,
  },
});
