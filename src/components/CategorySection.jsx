import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { data } from '../data/data_menu';
import CategoryItem from './CategoryItem';

const CategorySection = ({ navigation }) => {
  const [menuList, setMenuList] = useState(data);

  return (
    <View style={styles.container}>
      <FlatList
        data={menuList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CategoryItem item={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});

export default CategorySection;
