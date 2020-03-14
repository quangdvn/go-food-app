import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => {
      return {
        headerShown: false
      };
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: () => {
      return {
        headerShown: false
      };
    }
  }
});

export default createAppContainer(AppNavigator);
