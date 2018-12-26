import React, { Component } from 'react';
import { useScreens } from 'react-native-screens';

import AppNavigator from './app/navigator';

console.disableYellowBox = true;

useScreens();

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
