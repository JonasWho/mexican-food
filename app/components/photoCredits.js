import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const PhotoCredits = props => (
  <View style={styles.creditsContainer}>
    <Image
      style={styles.photo_by_icon}
      source={require('../images/icons/camera.png')}
    />
    <Text style={styles.photo_by}>Photo by</Text>
    <TouchableHighlight underlayColor="transparent" onPress={props.onPress}>
      <Text style={styles.photo_by_link}>{props.foodItem.photoby}</Text>
    </TouchableHighlight>
  </View>
);

const styles = EStyleSheet.create({
  creditsContainer: {
    paddingTop: '$contentPadding',
    paddingBottom: '$contentPadding',
    marginLeft: '$contentPadding',
    marginRight: '$contentPadding',
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  photo_by: {
    fontSize: 16,
    color: '$photoCreditTextColor',
    fontFamily: '$linkFont',
    marginRight: 4
  },
  photo_by_link: {
    fontSize: 16,
    color: '$linkColor',
    fontFamily: '$linkFont'
  },
  photo_by_icon: {
    marginTop: 2,
    marginRight: 7
  }
});

export default PhotoCredits;
