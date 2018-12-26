import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Button from './button';

const googleBaseSearchUrl = 'https://www.google.com.mx/search?q=';

class NoResult extends Component {
  openUrl(url) {
    if (url.length > googleBaseSearchUrl.length) {
      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err)
      );
    }
  }

  render() {
    if (this.props.count == 0) {
      return (
        <ScrollView
          scrollable="false"
          keyboardDismissMode="on-drag"
          style={styles.noResultsView}
        >
          <Image
            source={require('../images/icons/noresults.png')}
            style={styles.noResultIcon}
          />
          <Text style={[styles.noResultsText]}>
            You found a Mexican dish{'\n'}
            that's not listed here yet!
          </Text>
          <Text style={[styles.noResultsText]}>
            High fives for spotting it!
          </Text>
          <Button
            onPress={() =>
              this.openUrl(googleBaseSearchUrl + this.props.filterQuery)
            }
            buttonStyle={{ backgroundColor: '#2AB055', marginTop: 30 }}
            buttonTextStyle={{ fontSize: 18 }}
            buttonText="Let's try Google!"
            buttonTapColor="#3CC267"
          />
        </ScrollView>
      );
    } else {
      return null;
    }
  }
}

const styles = EStyleSheet.create({
  noResultsView: {
    padding: '$contentPadding'
  },
  noResultsText: {
    fontFamily: '$mainFont',
    color: '$photoCreditTextColor',
    fontSize: '$contentFontSize',
    textAlign: 'center',
    marginTop: 7
  },
  noResultIcon: {
    alignSelf: 'center',
    marginBottom: 27,
    marginTop: 14
  }
});
export default NoResult;
