import React, { useEffect } from 'react';
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
<<<<<<< HEAD:src/screens/authScreens/HomeScreen.jsx
import MainSection from '../../components/MainSection';
import CategorySection from '../../components/CategorySection';
import Popular from '../../components/Popular';
import { useSelector, useDispatch } from 'react-redux';
const HomeScreen = ({ navigation }) => {
  const res = useSelector(state => state.auth);

  useEffect(() => {
    console.log('respon when login success');
    console.log(res);
  }, []);
=======
import { Ionicons } from '@expo/vector-icons';
import MainSection from '../../../components/MainSection';
import CategorySection from '../../../components/CategorySection';
import PopularSection from '../../../components/PopularSection';

const RestaurantScreen = ({ navigation }) => {
>>>>>>> 8d5a48403845be47fa713ec1961a392c490904bc:src/screens/authScreens/mainScreens/RestaurantScreen.jsx
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar barStyle="dark-content" />
        <ImageBackground
          source={require('../../../../assets/images/header.png')}
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
<<<<<<< HEAD:src/screens/authScreens/HomeScreen.jsx
          tabBarTextStyle={{ fontFamily: 'open-sans', fontSize: 15 }}
=======
          tabBarTextStyle={{ fontFamily: 'open-sans', fontSize: 17 }}
>>>>>>> 8d5a48403845be47fa713ec1961a392c490904bc:src/screens/authScreens/mainScreens/RestaurantScreen.jsx
          renderTabBar={() => (
            <DefaultTabBar
              style={{ borderWidth: 0 }}
              underlineStyle={styles.underline}
            />
          )}
        >
<<<<<<< HEAD:src/screens/authScreens/HomeScreen.jsx
          <MainSection tabLabel="Main" navigation={navigation} />
          <CategorySection tabLabel="Categories" navigation={navigation} />
          <Popular tabLabel="Popular" navigation={navigation} />
=======
          <MainSection tabLabel="All" navigation={navigation} />
          <CategorySection tabLabel="Categories" navigation={navigation} />
          {/* <PopularSection tabLabel="Popular" navigation={navigation} /> */}
>>>>>>> 8d5a48403845be47fa713ec1961a392c490904bc:src/screens/authScreens/mainScreens/RestaurantScreen.jsx
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
