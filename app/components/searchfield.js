import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  TextInput,
  Platform,
  Image,
  LayoutAnimation
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('window');

class SearchField extends Component {
  state = {
    touchIsActive: false
  };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  cancelSearch = () => {
    //this.props.actions.resetSearch(this.props.data);
    this.props.resetSearch();
    this.setState({ touchIsActive: false });
  };

  fireSearch = text => {
    const { data, updateList } = this.props;
    //this.props.actions.updateFilterQuery(text);
    var filteredData = data.filter(
      entry => entry.name.toLowerCase().indexOf(text.toLowerCase()) >= 0
    );
    updateList(filteredData);
  };

  onShowUnderlay = () => {
    this.setState({ touchIsActive: true });
  };

  onHideUnderlay = () => {
    this.setState({ touchIsActive: false });
  };

  render() {
    const { showSearch, filterQuery } = this.props;
    const { touchIsActive } = this.state;

    if (showSearch) {
      return (
        <View style={styles.searchContainer}>
          <Image
            source={require('../images/icons/search.png')}
            style={styles.navIcon}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={this.fireSearch}
            defaultValue={filterQuery}
            placeholder={'Search food'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            autoFocus={true}
            underlineColorAndroid={'transparent'}
            returnKeyType={'search'}
            clearButtonMode={'while-editing'}
          />
          <TouchableHighlight
            onHideUnderlay={this.onHideUnderlay}
            onShowUnderlay={this.onShowUnderlay}
            underlayColor="transparent"
            activeOpacity={100}
            style={{ width: 55 }}
            onPress={this.cancelSearch}
          >
            <Text
              style={[
                styles.cancelButton,
                touchIsActive ? { color: '#ffffff' } : null
              ]}
            >
              Cancel
            </Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = EStyleSheet.create({
  navIcon: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 12,
    left: 5,
    opacity: 0.8,
    width: 18,
    height: 18
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    height: 34,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.12)',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 35,
    paddingRight: 5,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 5,
    color: '#ffffff'
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '$mainBgColor',
    height: 45,
    width: '100%',
    position: 'absolute',
    top: 0, //Platform.OS == 'ios' ? 0 : 5,
    left: 0
  },
  cancelButton: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    marginTop: 12
  }
});

export default SearchField;
