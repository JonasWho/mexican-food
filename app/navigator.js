import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LaunchScreen from './screens/launch';
import FoodList from './screens/list';
import FoodDetail from './screens/details';
import About from './screens/about';
import OpenSource from './screens/opensource';

import EStyleSheet from 'react-native-extended-stylesheet';

import theme from './style/theme';
EStyleSheet.build(theme);

const MainStack = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  FoodList: {
    screen: FoodList
  },
  FoodDetail: {
    screen: FoodDetail
  },
  OpenSource: {
    screen: OpenSource
  }
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        header: null
      }
    },
    About: {
      screen: About
    }
  },
  {
    mode: 'modal'
  }
);

export default createAppContainer(RootStack);
