import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainItem from './MainItem';
import Colors from '../constants/Colors';

const MainSection = ({ navigation, restaurantList }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.search}>Search ...</Text>
        <TouchableOpacity style={styles.closeIcon}>
          <Ionicons name="ios-close" color="gray" size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        {restaurantList.length !== 0 ? (
          <FlatList
            data={restaurantList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <MainItem item={item} navigation={navigation} />
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator size="large" color={Colors.primary} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  listContainer: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginVertical: 10,
  },
  search: {
    color: 'gray',
    flex: 1,
    marginLeft: 10,
  },
  closeIcon: {
    paddingHorizontal: 10,
  },
});
export default MainSection;
