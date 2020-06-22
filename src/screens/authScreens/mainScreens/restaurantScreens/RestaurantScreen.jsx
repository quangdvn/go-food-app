import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import { Ionicons } from '@expo/vector-icons';
import MainSection from '../../../../components/MainSection';
import CategorySection from '../../../../components/CategorySection';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRestaurants } from '../../../../store/actions';
import categoryData from '../../../../data/categories.json';

const RestaurantScreen = ({ navigation }) => {
  const { restaurantList } = useSelector(state => state.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [getAllRestaurants]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar barStyle="dark-content" />
        <ImageBackground
          source={require('../../../../../assets/images/header.png')}
          style={styles.imageBackground}
          resizeMode="stretch"
        >
          <Text style={styles.headerTitle}>HOME</Text>
        </ImageBackground>
        <View style={styles.backButton}>
          <Ionicons
            name="ios-menu"
            color="white"
            size={45}
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
      </View>
      <View style={styles.tabBar}>
        <ScrollableTabView
          style={styles.tabBarContent}
          initialPage={0}
          tabBarActiveTextColor="green"
          tabBarTextStyle={{ fontFamily: 'open-sans', fontSize: 15 }}
          renderTabBar={() => (
            <DefaultTabBar
              style={{ borderWidth: 0, width: '100%' }}
              underlineStyle={styles.underline}
            />
          )}
        >
          <MainSection
            tabLabel="All"
            navigation={navigation}
            restaurantList={restaurantList}
          />
          <CategorySection
            tabLabel="Categories"
            navigation={navigation}
            categoryData={categoryData}
          />
          {/* <PopularSection tabLabel="Popular" navigation={navigation} /> */}
        </ScrollableTabView>
      </View>
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 33,
    position: 'absolute',
  },
  tabBar: {
    flex: 1,
    marginTop: screenWidth * 0.3,
    paddingHorizontal: 30,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    marginTop: 15,
    marginLeft: 20,
  },
  tabBarContent: {
    marginTop: 20,
  },
  underline: {
    backgroundColor: 'green',
    borderWidth: null,
  },
  imageBackground: {
    width: screenWidth * 0.55,
    height: screenWidth * 0.45,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    marginTop: 20,
    marginLeft: 60,
    fontFamily: 'open-sans-bold',
    fontSize: 25,
  },
});

export default RestaurantScreen;
