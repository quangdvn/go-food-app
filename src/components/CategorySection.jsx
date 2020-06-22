import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import CategoryItem from './CategoryItem';

const CategorySection = ({ navigation,categoryData }) => {  
  const [menuList, setMenuList] = useState(categoryData);

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
