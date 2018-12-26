import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicatorIOS } from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Preparing foods...</Text>
        <ActivityIndicatorIOS
          animating={true}
          style={[styles.activityIndicator]}
          size="large"
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
