'use strict';

import React from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
const {
  StyleSheet,
  ListView,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  PropTypes,
  InteractionManager,
  ProgressBarAndroid,
  Image,
  DrawerLayoutAndroid,
  Dimensions,
  View
} = React;

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  dbb: PropTypes.object.isRequired
}

const HOME = 'home';
const HOME_NORMAL = require('../images/tabs/home_normal.png');
const HOME_FOCUS = require('../images/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../images/tabs/category_normal.png');
const CATEGORY_FOCUS = require('../images/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('../images/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('../images/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../images/tabs/cart_normal.png');
const CART_FOCUS = require('../images/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../images/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('../images/tabs/personal_focus.png');
class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: HOME}
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {
    
  }

  _renderTabItem(img, selectedImg, tag, childView) {
    return (
        <TabNavigator.Item
            selected={this.state.selectedTab === tag}
            renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
            renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
            onPress={() => this.setState({ selectedTab: tag })}>
          {childView}
        </TabNavigator.Item>
    );
  }

  static _createChildView(tag) {
    return (
        <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:22}}>{tag}</Text>
        </View>
    )
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <Header />
          <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
            {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage/>)}
            {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, MainScreen._createChildView(CATEGORY))}
            {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, MainScreen._createChildView(FAXIAN))}
            {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, MainScreen._createChildView(CART))}
            {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, MainScreen._createChildView(PERSONAL))}
          </TabNavigator>
        </View >
    );
  }


}

export default MainScreen;
const styles = StyleSheet.create({
  tab: {
    height: 52,
    backgroundColor: '#303030',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 35,
    resizeMode: 'stretch',
    marginTop: 12.5
  }
});
// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   containerItem: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fcfcfc',
//     padding: 10,
//     borderBottomColor: '#ddd',
//     borderBottomWidth: 1
//   },
//   title: {
//     flex: 3,
//     fontSize: 18,
//     textAlign: 'left',
//     color: 'black'
//   },
//   listView: {
//     backgroundColor: '#eeeeec'
//   },
//   no_data: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingBottom: 100
//   },
//   drawerContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd'
//   },
//   drawerIcon: {
//     width: 30,
//     height: 30,
//     marginLeft: 5
//   },
//   drawerText: {
//     fontSize: 18,
//     marginLeft: 15,
//     textAlign: 'center',
//     color: 'black'
//   }
// })

Main.propTypes = propTypes;

export default Main;