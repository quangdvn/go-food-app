import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/authScreens/HomeScreen';
import RestaurantDetailScreen from '../screens/authScreens/RestaurantDetailScreen';
import AccountScreen from '../screens/authScreens/AccountScreen';
import LogInScreen from '../screens/unAuthScreens/LoginScreen';
import SignUpScreen from '../screens/unAuthScreens/SignUpScreen';
import WelcomeScreen from '../screens/unAuthScreens/WelcomeScreen';
import GetInfoScreen from '../screens/unAuthScreens/GetInfoScreen';

const AuthStack = createStackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  // Welcome: {
  //   screen: WelcomeScreen,
  //   navigationOptions: () => {
  //     return {
  //       headerShown: false,
  //     };
  //   },
  // },
  GetInfo: {
    screen: GetInfoScreen,
  },
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  LogIn: {
    screen: LogInScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
    RestaurantDetail: {
      screen: RestaurantDetailScreen,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
    Account: {
      screen: AccountScreen,
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

const SwitchNavigator = createSwitchNavigator(
  {
    AuthStack,
    MainStack,
  },
  {
    initialRouteName: 'AuthStack',
  }
);
export default createAppContainer(SwitchNavigator);
