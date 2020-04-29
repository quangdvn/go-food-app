import React, { useState } from 'react';
import RootNavigation from './src/navigations/RootNavigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [isLoadFont, setLoadFont] = useState(false);
  console.log("hello Bui Quang Huy");
  
  return !isLoadFont ? (
    <AppLoading startAsync={fetchFonts} onFinish={() => setLoadFont(true)} />
  ) : (
    <RootNavigation />
  );
}
