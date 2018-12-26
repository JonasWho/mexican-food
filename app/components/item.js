import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
  Platform,
  View
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import FoodDetail from '../screens/details';
import h from '../helpers/imageHelper';

const FoodItem = props => (
  <ImageBackground
    source={h.getImageSource(props.foodData.id)}
    style={{
      width: '100%',
      height: props.height
    }}
  >
    <View style={styles.imageFader} />
    <TouchableHighlight
      style={styles.background}
      onPress={props.onPress}
      underlayColor="transparent"
    >
      <View style={styles.textWrapper}>
        <Text style={styles.foodTitle}>{props.foodData.name}</Text>
        <View style={styles.categoryWrapper}>
          <Text style={styles.foodCategory}>
            {props.foodData.category.toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  </ImageBackground>
);

const styles = EStyleSheet.create({
  // $outline: 1,
  background: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  textWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  foodTitle: {
    fontFamily: '$mainFont',
    fontSize: Platform.OS === 'ios' ? 28 : 22,
    lineHeight: Platform.OS === 'ios' ? 30 : 30,
    color: '#fff'
  },
  categoryWrapper: {
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  foodCategory: {
    fontFamily: '$itemCategoryFont',
    fontSize: Platform.OS === 'ios' ? 12 : 10,
    letterSpacing: 0.83,
    color: '#fff',
    paddingVertical: Platform.OS === 'ios' ? 2 : 1
  },
  imageFader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.35)'
  }
});

export default FoodItem;
