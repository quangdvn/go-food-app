import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Colors from '../constants/Colors';
import { getBusinessByAlias } from '../api/goFoodApi';

const CategoryItem = ({ item, navigation }) => {
  const [listRestaurant, setListRestaurant] = useState(null);

  const getListRestaurant = async () => {
    try {
      const { data } = await getBusinessByAlias(item.alias);
      setListRestaurant(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getListRestaurant();
  }, []);

  const typeItemSeparatorComponent = () => {
    return <View style={{ width: 30 }} />;
  };

  const renderTypeItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.typeItem}
        onPress={() =>
          navigation.navigate('RestaurantDetail', { mainItem: item })
        }
      >
        <Image source={{ uri: item.image_url }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...styles.type, color: item.color }}>{item.title}</Text>
      <View style={{ ...styles.item, backgroundColor: item.color }}>
        {listRestaurant ? (
          <FlatList
            data={listRestaurant}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderTypeItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={typeItemSeparatorComponent}
          />
        ) : (
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
          >
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  type: {
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
  item: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  typeItem: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 5
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 15,
    fontFamily: 'open-sans-bold',
  },
});

export default CategoryItem;
