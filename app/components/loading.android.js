import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
var ProgressBar = require('ProgressBarAndroid');

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Preparing foods...</Text>
        <ProgressBar
          styleAttr="Large"
          style={styles.activityIndicator}
          color="#ffffff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  pageTitle: {
    fontSize: 21,
    color: '#ffffff'
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  }
});

export default Loading;
