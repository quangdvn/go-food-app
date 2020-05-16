import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../components/Icon/CustomeHeader';

//* All the Screens
import LogInScreen from '../screens/unAuthScreens/LoginScreen';
import SignUpScreen from '../screens/unAuthScreens/SignUpScreen';
import WelcomeScreen from '../screens/unAuthScreens/WelcomeScreen';
import GetInfoScreen from '../screens/unAuthScreens/GetInfoScreen';

const AuthStack = createStackNavigator({
  GetInfo: {
    screen: GetInfoScreen,
    navigationOptions: () => {
      return {
        header: () => <Header title="Get Info" />,
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
});

export default AuthStack;
