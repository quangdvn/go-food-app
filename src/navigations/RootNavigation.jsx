import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/authScreens/HomeScreen';
import RestaurantDetailScreen from '../screens/authScreens/RestaurantDetailScreen';
import LoginScreen from '../screens/unAuthScreens/LoginScreen';
import SignUpScreen from '../screens/unAuthScreens/SignUpScreen';
import WelcomeScreen from '../screens/unAuthScreens/WelcomeScreen';
import AccountScreen from '../screens/authScreens/AccountScreen';
const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
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
});

const AppStack = createStackNavigator(
  {
    Account: {
      screen: AccountScreen,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
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
  },
  {
    initialRouteName: 'Home',
  }
);

const MySwitchNavigator = createSwitchNavigator(
  {
    AuthStack: AuthStack,
    AppStack: AppStack,
  },
  {
    initialRouteName: 'AuthStack',
  }
);
export default createAppContainer(MySwitchNavigator);
