import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../components/Icon/CustomeHeader';

//* All the Screens
import LogInScreen from '../screens/unAuthScreens/LoginScreen';
import SignUpScreen from '../screens/unAuthScreens/SignUpScreen';
import WelcomeScreen from '../screens/unAuthScreens/WelcomeScreen';
import GetInfoScreen from '../screens/unAuthScreens/GetInfoScreen';

const AuthStack = createStackNavigator(
  {
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
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
    GetInfo: {
      screen: GetInfoScreen,
      navigationOptions: () => {
        return {
          header: () => <Header title="Get Info" />,
        };
      },
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default AuthStack;
