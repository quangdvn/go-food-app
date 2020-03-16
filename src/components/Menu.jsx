import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { data } from '../data/data_menu';

const Menu = ({ navigation }) => {
  const [menuList, setMenuList] = useState(data);

  const renderTypeItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.typeItem}
        onPress={() => navigation.navigate('Detail', { item })}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const typeItemSeparatorComponent = () => {
    return <View style={{ width: 30 }} />;
  };

  const MenuSeparatorComponent = () => {
    return <View style={{ height: 20 }} />;
  };

  const renderItem = ({ item }) => {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={menuList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={MenuSeparatorComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: 'white'
  },
  type: {
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  },
  item: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10
  },
  typeItem: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white'
  },
  name: {
    marginTop: 10,
    color: 'white',
    fontSize: 15,
    fontFamily: 'open-sans-bold'
  }
});

export default Menu;
