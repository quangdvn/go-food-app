import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthNavigation';
import MainStack from './MainNavigation';

const AppStack = createSwitchNavigator(
  {
    MainStack,
    AuthStack,
  },
  {
    initialRouteName: 'MainStack',
  }
);
export default createAppContainer(AppStack);
