import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthNavigation';
import MainStack from './MainNavigation';
import LoadingScreen from '../screens/unAuthScreens/LoadingScreen';

const AppStack = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    MainStack,
    AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
);
export default createAppContainer(AppStack);
