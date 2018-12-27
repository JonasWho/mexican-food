import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var icon = null;
    if (this.props.iconName) {
      icon = (
        <Image
          source={this.props.iconName}
          style={[styles.icon, this.props.iconStyle || {}]}
        />
      );
    }
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.button, this.props.buttonStyle || {}]}
        underlayColor={this.props.buttonTapColor || '#ffffff'}
        activeOpacity={100}
      >
        <View
          style={[
            styles.buttonContentWrapper,
            this.props.buttonContentWrapperStyle || {}
          ]}
        >
          {icon}
          <Text style={[styles.buttonText, this.props.buttonTextStyle || {}]}>
            {this.props.buttonText}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = EStyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 12,
    flex: 1
  },
  buttonContentWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: '$mainFont',
    fontSize: 13,
    color: '#ffffff'
  },
  icon: {
    marginRight: 5
  }
});

export default Button;
