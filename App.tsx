/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import MainScreen from './src/screens/home/homeScreen';

function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = React.useState(
    useColorScheme() === 'dark',
  );

  return <MainScreen isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
}

export default App;
