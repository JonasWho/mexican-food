import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  InteractionManager,
  BackAndroid,
  Alert,
  TouchableHighlight,
  Linking
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ParsedText from 'react-native-parsed-text';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import h from '../helpers/imageHelper';
import PhotoCredits from '../components/photoCredits';
import dh from '../helpers/dataHelper';
import theme from '../style/theme';

const pattern = /\<(.*?)\>/i;
const { width, height } = Dimensions.get('window');

class FoodDetail extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { state, setParams } = navigation;
    const { params } = state;
    return {
      headerTitle: params.foodItem.name,
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

  constructor(props) {
    super(props);

    const { foodItem } = props.navigation.state.params;
    const foodData = dh.getFoodItems().filter(f => f.include === 'YES');
    const foods = foodData.filter(f => f.id != foodItem.id);
    const exp = foods
      .map(f => f.name.toLowerCase())
      .concat(foods.map(f => f.name));

    this.state = {
      data: foodData,
      pattern: new RegExp(exp.join('|'), 'i')
    };
  }

  handleFoodNamePress = name => {
    const { navigation } = this.props;
    const { foodItem } = navigation.state.params;
    const match = name.match(pattern);
    const indexOfPlus = match[1].indexOf('+');
    const foodKey =
      indexOfPlus > -1 ? match[1].substring(indexOfPlus + 1) : match[1];
    const nextFoodItem = this.state.data.filter(
      item =>
        item.name.toLowerCase() == foodKey.toLowerCase() &&
        foodItem.name.toLowerCase() != foodKey.toLowerCase()
    )[0];
    if (nextFoodItem)
      navigation.push('FoodDetail', {
        foodItem: nextFoodItem,
        image: h.getImageSource(nextFoodItem.id)
      });
  };

  renderImageSize() {
    let _height = height / 2.5;
    return { height: _height, width: '100%' };
  }

  renderParsedText = (matchingString, matches) => {
    let match = matchingString.match(pattern);
    let indexOfPlus = match[1].indexOf('+');
    return indexOfPlus > -1 ? match[1].substring(0, indexOfPlus) : match[1];
  };

  openUrl = url => {
    if (url && url.indexOf('http') == 0)
      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err)
      );
  };

  render() {
    const { foodItem, image } = this.props.navigation.state.params;

    if (foodItem) {
      let credits = null;
      if (foodItem.photoby)
        credits = (
          <PhotoCredits
            foodItem={foodItem}
            onPress={() => this.openUrl(foodItem.foodItem.photolink)}
          />
        );
      const imageSize = this.renderImageSize();
      return (
        <View style={{ flex: 1 }}>
          <ParallaxScrollView
            backgroundColor={'#fff'}
            contentBackgroundColor={'#fff'}
            parallaxHeaderHeight={imageSize.height}
            renderBackground={() => (
              <Image source={image} style={[styles.foodImage, imageSize]} />
            )}
          >
            <View style={styles.foodTextContainer}>
              <Text style={styles.foodTitle}>{foodItem.name}</Text>
              <Text style={styles.foodCategory}>
                {foodItem.category ? foodItem.category.toUpperCase() : ''}
              </Text>

              <ParsedText
                style={styles.foodDescription}
                parse={[
                  {
                    pattern: /\<(.*?)\>/i,
                    style: styles.link,
                    onPress: this.handleFoodNamePress,
                    renderText: this.renderParsedText
                  }
                ]}
              >
                {foodItem.description}
              </ParsedText>
            </View>
            {credits}
          </ParallaxScrollView>
        </View>
      );
    } else {
      return <View />;
    }
  }
}

const styles = EStyleSheet.create({
  foodDetailView: {
    flex: 1,
    backgroundColor: '$contentBgColor'
  },
  foodTextContainer: {
    flex: 7,
    padding: '$contentPadding',
    paddingTop: 25
  },
  foodTitle: {
    fontFamily: '$mainFont',
    fontSize: '$titleFontSize',
    color: '$mainTextColor',
    lineHeight: 42
  },
  foodCategory: {
    fontFamily: '$mainFont',
    fontSize: 17,
    color: '#AFAFAF',
    letterSpacing: 1.5
  },
  foodDescription: {
    fontFamily: '$mainFont',
    fontSize: '$contentFontSize',
    color: '$mainTextColor',
    marginTop: '$contentPadding'
  },
  foodImage: {
    resizeMode: 'cover'
  },
  tagsWrapper: {
    fontFamily: '$mainFont',
    marginTop: 20,
    fontSize: 12
  },
  tagLink: {
    marginLeft: 10,
    paddingLeft: 10
  },
  link: {
    fontFamily: '$linkFont',
    color: '$linkColor',
    fontSize: '$contentFontSize'
  }
});

export default FoodDetail;
