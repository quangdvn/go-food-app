import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MainItem from './../../components/MainItem';
import { useSelector } from 'react-redux';

const SearchResultScreen = ({ navigation }) => {
  const { restaurantList } = useSelector(state => state.service);
  const { keyword } = navigation.state.params;

  
  return (
    <View style={styles.container}>
      <Text>The Result of keyword: "{keyword}"</Text>
      <View style={{ marginHorizontal: 30, marginTop: 20 }}>
        <FlatList
          data={restaurantList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MainItem item={item} navigation={navigation} />
          )}
          showsVertical
          ScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
