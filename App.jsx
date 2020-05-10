import React, { useState } from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import store from './src/store/store.js';
import * as Font from 'expo-font';
import { setNavigator } from './src/navigationRef';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [isLoadFont, setLoadFont] = useState(false);

  return !isLoadFont ? (
    <AppLoading startAsync={fetchFonts} onFinish={() => setLoadFont(true)} />
  ) : (
    <Provider store={store}>
      <RootNavigation ref={nav => setNavigator(nav)} />
    </Provider>
  );
}
