import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions,
  Linking,
  ScrollView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Button from '../components/button';
import theme from '../style/theme';

var { width, height } = Dimensions.get('window');

class About extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { state, setParams } = navigation;
    const { params } = state;
    return {
      headerTitle: 'About this app',
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
          <Image source={require('../images/icons/close.png')} />
        </TouchableHighlight>
      )
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      currentScreenWidth: width,
      currentScreenHeight: height
    };
  }

  renderImageSize() {
    var height = this.state.currentScreenHeight / 3;
    return { height: height, width: this.state.currentScreenWidth };
  }

  openUrl(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  showOpenSourceInfo = () => {
    this.props.navigation.navigate('OpenSource');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.aboutView}>
          <Image
            source={require('../images/us.jpg')}
            style={[styles.aboutImage, this.renderImageSize()]}
          />
          <View style={styles.aboutTextContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.aboutTitle}>For the Love of Food</Text>
              <Text style={styles.aboutDescription}>
                We are Angie and Jonas and we made this app because we love
                food. Given Angie’s roots and Jonas’ taste buds, we have a
                special interest in the mexican kitchen. We think it deserves a
                bit more credit than it’s given, so here’s our attempt to
                introduce you to the real mexican stuff.
              </Text>
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                onPress={() => this.openUrl('http://www.betweenthebuttons.dk')}
                buttonStyle={{ backgroundColor: '#2AB055', marginRight: 7 }}
                buttonTextStyle={{ fontSize: 18 }}
                buttonText="Website"
                buttonTapColor="#3CC267"
                iconName={require('../images/icons/website.png')}
              />
              <Button
                onPress={() =>
                  this.openUrl('mailto:hello@betweenthebuttons.dk')
                }
                buttonStyle={{ backgroundColor: '#BBBBBB', marginLeft: 7 }}
                buttonTextStyle={{ fontSize: 18 }}
                buttonText="Email"
                buttonTapColor="#D5D5D5"
                iconName={require('../images/icons/email.png')}
              />
            </View>
            <View
              style={[
                styles.buttonWrapper,
                styles.paddingTop,
                styles.paddingBottom,
                styles.borderTop,
                styles.borderBottom
              ]}
            >
              <View style={[styles.creditsCell, { marginRight: 7 }]}>
                <Text style={styles.creditsTitle}>DESIGN</Text>
                <Text style={styles.creditsName}>Angelica Vargas</Text>
              </View>
              <View style={[styles.creditsCell, { marginLeft: 20 }]}>
                <Text style={styles.creditsTitle}>DEVELOPMENT</Text>
                <Text style={styles.creditsName}>Jonas Åradsson</Text>
              </View>
            </View>
            <View
              style={[
                styles.buttonWrapper,
                styles.paddingBottom,
                styles.borderBottom
              ]}
            >
              <Text style={styles.photosText}>
                All photos by us unless otherwise credited
              </Text>
            </View>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={this.showOpenSourceInfo}
            >
              <Text style={styles.aboutOSLink}>
                With a little help from our OpenSource friends
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  aboutView: {
    flex: 1,
    //marginTop:60,
    backgroundColor: '$contentBgColor'
  },
  aboutImage: {
    resizeMode: 'cover'
  },
  aboutTextContainer: {
    padding: '$contentPadding',
    paddingTop: 25
  },
  aboutTitle: {
    fontFamily: '$mainFont',
    fontSize: 30,
    lineHeight: 34,
    color: '$mainTextColor',
    marginBottom: 0
  },
  aboutDescription: {
    fontFamily: '$mainFont',
    fontSize: '$contentFontSize',
    color: '$mainTextColor',
    marginTop: 10,
    lineHeight: 26
  },
  textWrapper: {
    flex: 1,
    marginBottom: '$sectionMargin'
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginBottom: '$sectionMargin'
  },
  paddingTop: {
    paddingTop: '$sectionMargin'
  },
  paddingBottom: {
    paddingBottom: '$sectionMargin'
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9'
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9'
  },
  creditsTitle: {
    alignSelf: 'stretch',
    color: '#afafaf',
    fontSize: 15,
    fontFamily: '$mainFont',
    letterSpacing: 1.5
  },
  creditsName: {
    alignSelf: 'stretch',
    fontSize: 16,
    fontFamily: '$mainFont',
    color: '$mainTextColor'
  },
  creditsCell: {
    flex: 1,
    flexDirection: 'column'
  },
  photosText: {
    flex: 1,
    color: '#afafaf',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: '$mainFont',
    fontStyle: 'italic',
    marginLeft: 15,
    marginRight: 15
  },
  aboutOSLink: {
    fontFamily: '$linkFont',
    color: '$linkColor',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: '$sectionMargin'
  }
});

export default About;
