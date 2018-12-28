import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
  Platform,
  Dimensions
} from 'react-native';
import { AppLoading, Asset } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import FoodItem from '../components/item';
import Loading from '../components/loading';
import NoResult from '../components/noResult';
import SearchField from '../components/searchfield';
import dh from '../helpers/dataHelper';
import h from '../helpers/imageHelper';

const { width, height } = Dimensions.get('window');
const ITEM_HEIGHT = height / 5 + 2;

class FoodList extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { state, setParams } = navigation;
    const { params } = state;

    return {
      headerTitle: <Image source={require('../images/logo.png')} />,
      headerStyle: {
        backgroundColor: '#2AB055',
        borderBottomWidth: 0
      },
      headerLeft: (
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.navButton}
          onPress={() => navigation.navigate('About')}
        >
          <Image source={require('../images/icons/info.png')} />
        </TouchableHighlight>
      ),
      headerRight: (
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.navButton}
          onPress={() => setParams({ showSearch: true })}
        >
          <Image source={require('../images/icons/search.png')} />
        </TouchableHighlight>
      )
    };
  };

  constructor(props) {
    super(props);

    const data = dh.getFoodItems().filter(f => f.include === 'YES');
    this.state = {
      allData: data,
      data,
      showSearch: false,
      isReady: false
    };
  }

  componentWillMount() {
    if (Platform.OS === 'ios') StatusBar.setBarStyle('light-content');
    else if (Platform.OS === 'android') StatusBar.setBackgroundColor('#2AB055');
  }

  renderFood = ({ item }) => {
    const { navigation } = this.props;
    return (
      <FoodItem
        foodData={item}
        onPress={() =>
          navigation.navigate('FoodDetail', {
            foodItem: item,
            image: h.getImageSource(item.id)
          })
        }
        height={ITEM_HEIGHT}
      />
    );
  };

  _cacheResourcesAsync = async () => {
    const cacheImages = this.state.allData.map(foodItem => {
      return Asset.fromModule(h.getImageSource(foodItem.id)).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  render() {
    const { data, allData, filterQuery, isReady } = this.state;
    const { navigation } = this.props;
    const showSearch = navigation.state.params
      ? navigation.state.params.showSearch
      : false;

    if (!isReady)
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    if (!data) return <Loading />;
    return (
      <View style={styles.foodListView}>
        <View style={styles.foodListView}>
          <FlatList
            initialNumToRender={6}
            data={data}
            renderItem={this.renderFood}
            ListHeaderComponent={() => (
              <View style={showSearch ? { height: 36 } : {}} />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            style={[styles.listContainer, data ? { flex: 0, height: 0 } : {}]}
            renderHeader
            keyExtractor={(item, index) => `${item.id}`}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index
            })}
            keyboardDismissMode={'on-drag'}
            keyboardShouldPersistTaps={'handled'}
          />
          <NoResult count={data.length} filterQuery={filterQuery} />
        </View>
        <SearchField
          data={allData}
          showSearch={showSearch}
          resetSearch={() => {
            navigation.setParams({ showSearch: false });
          }}
          updateList={data => this.setState({ data })}
          filterQuery={filterQuery}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  foodListView: {
    flexGrow: 1,
    backgroundColor: '#ffffff'
  },
  listContainer: {
    flexGrow: 1,
    backgroundColor: '#ffffff'
  },
  separator: {
    height: 2,
    width: '100%'
  },
  navTitle: {
    fontFamily: '$mainFont',
    fontSize: 20,
    color: '#ffffff',
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    paddingTop: 0,
    textAlign: 'center',
    alignSelf: 'center'
  },
  navButton: {
    width: 40,
    height: 40,
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FoodList;
