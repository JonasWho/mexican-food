import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class LaunchScreen extends Component {
  static navigationOptions = { header: null };

  componentDidMount() {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'FoodList' })]
      });
      this.props.navigation.dispatch(resetAction);
    }, 1500);
  }

  render() {
    return (
      <ImageBackground
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        source={require('../images/launch.png')}
      />
    );
  }
}

export default LaunchScreen;
