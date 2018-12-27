import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  ScrollView,
  TouchableHighlight,
  BackAndroid,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import theme from '../style/theme';

class OpenSource extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    return {
      headerTitle: 'Open Source Libraries',
      headerStyle: {
        backgroundColor: '#2AB055'
      },
      headerTitleStyle: theme.$titleStyle,
      headerLeft: (
        <TouchableHighlight
          underlayColor="transparent"
          style={theme.$navButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={require('../images/icons/back.png')} />
        </TouchableHighlight>
      )
    };
  };

  openUrl(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.osView}>
          <View style={styles.osTextContainer}>
            <Text style={styles.osTitle}>Use of OpenSource Libraries</Text>

            <Text style={styles.osItemTitle}>React Native</Text>
            <Text style={styles.osItemText}>
              Version: 0.57.1{'\n'}
              BSD License. For React Native software{'\n'}
              Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
            </Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                this.openUrl('https://github.com/facebook/react-native')
              }
            >
              <Text style={styles.osLink}>
                https://github.com/facebook/react-native
              </Text>
            </TouchableHighlight>

            <Text style={styles.osItemTitle}>Expo</Text>
            <Text style={styles.osItemText}>Version: 31.0.2</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.openUrl('https://expo.io/')}
            >
              <Text style={styles.osLink}>https://expo.io/</Text>
            </TouchableHighlight>

            <Text style={styles.osItemTitle}>React Navigation</Text>
            <Text style={styles.osItemText}>Version: 3.0.4</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.openUrl('https://reactnavigation.org/')}
            >
              <Text style={styles.osLink}>https://reactnavigation.org/</Text>
            </TouchableHighlight>

            <Text style={styles.osItemTitle}>React Native Screens</Text>
            <Text style={styles.osItemText}>Version: 1.0.0-alpha.16</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                this.openUrl('https://github.com/kmagiera/react-native-screens')
              }
            >
              <Text style={styles.osLink}>
                https://github.com/kmagiera/react-native-screens
              </Text>
            </TouchableHighlight>

            <Text style={styles.osItemTitle}>
              React Native Extended StyleSheet
            </Text>
            <Text style={styles.osItemText}>
              Version: 0.10.0{'\n'}
              MIT license
            </Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                this.openUrl(
                  'https://github.com/vitalets/react-native-extended-stylesheet'
                )
              }
            >
              <Text style={styles.osLink}>
                https://github.com/vitalets/react-native-extended-stylesheet
              </Text>
            </TouchableHighlight>

            <Text style={styles.osItemTitle}>
              React Native Parallax ScrollView
            </Text>
            <Text style={styles.osItemText}>Version: 0.21.3</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                this.openUrl(
                  'https://github.com/i6mi6/react-native-parallax-scroll-view'
                )
              }
            >
              <Text style={styles.osLink}>
                https://github.com/i6mi6/react-native-parallax-scroll-view
              </Text>
            </TouchableHighlight>

            <Text style={styles.osItemTitle}>React Native Parsed Text</Text>
            <Text style={styles.osItemText}>Version: 0.0.21</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                this.openUrl(
                  'https://github.com/taskrabbit/react-native-parsed-text'
                )
              }
            >
              <Text style={styles.osLink}>
                https://github.com/taskrabbit/react-native-parsed-text
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  osView: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  osTextContainer: {
    padding: 18
  },
  osTitle: {
    fontFamily: '$mainFont',
    fontSize: 30,
    lineHeight: 34
  },
  osItemTitle: {
    fontFamily: '$mainFont',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20
  },
  osItemText: {
    fontFamily: '$mainFont',
    fontSize: 16
  },
  osLink: {
    fontFamily: '$linkFont',
    color: '$linkColor',
    fontSize: 16
  }
});

export default OpenSource;
