import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/authScreens/HomeScreen';
import DetailScreen from '../screens/authScreens/DetailScreen';
import LoginScreen from '../screens/unAuthScreens/LoginScreen';
import SignUpScreen from '../screens/unAuthScreens/SignUpScreen';
import WelcomeScreen from '../screens/unAuthScreens/WelcomeScreen';

const AuthNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AuthNavigator);
