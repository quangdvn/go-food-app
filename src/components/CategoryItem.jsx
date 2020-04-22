import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

const CategoryItem = ({ item, navigation }) => {
  const typeItemSeparatorComponent = () => {
    return <View style={{ width: 30 }} />;
  };

  const renderTypeItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.typeItem}
        onPress={() => navigation.navigate('RestaurantDetail', { item })}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...styles.type, color: item.color }}>{item.type}</Text>
      <View style={{ ...styles.item, backgroundColor: item.color }}>
        <FlatList
          data={item.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTypeItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={typeItemSeparatorComponent}
        />
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
