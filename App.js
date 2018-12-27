import React, { Component } from 'react';
import { Platform } from 'react-native';
import { useScreens } from 'react-native-screens';
import { Font } from 'expo';

import AppNavigator from './app/navigator';

console.disableYellowBox = true;

useScreens();

export default class App extends Component {
  async componentDidMount() {
    if (Platform.OS === 'android')
      await Font.loadAsync({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf')
      });
  }

  render() {
    return <AppNavigator />;
  }
}
