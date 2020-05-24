import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthNavigation';
import MainStack from './MainNavigation';
import InitialLoadingScreen from '../screens/unAuthScreens/LoadingScreen';
import DataLoadingScreen from '../screens/authScreens/LoadingScreen';

const AppStack = createSwitchNavigator(
  {
    InitialLoading: InitialLoadingScreen,
    DataLoading: DataLoadingScreen,
    AuthStack,
    MainStack,
  },
  {
    initialRouteName: 'InitialLoading',
  }
);
export default createAppContainer(AppStack);
