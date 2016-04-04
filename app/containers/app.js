/**
 * Created by gaoletian on 15/11/25.
 */

import React from 'react-native';
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
const { Component,View, Navigator, Text, StyleSheet, Platform, Image, Alert } = React;


//import LoadSpinner from '../components/LoadSpinner';
/** 主tab 四页*/
import Home from '../components/home/Home';
import Order from '../components/order/container';
import Favourite from '../components/favours/container';
import Mine from '../components/mine/container';

import ProductDetail from '../components/ProductDetail';
import ProductList from '../components/ProductList';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    marginBottom: 0,
  }
});
const TAB_TITLE_HOME = '首页';
const TAB_TITLE_FAVOURS = '收藏';
const TAB_TITLE_ORDER = '订单';
const TAB_TITLE_MINE = '我的';

let hideNavBar = Platform.OS !== 'ios';
hideNavBar = false;

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    //console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};

class TabIcon extends React.Component {

  render(){
    let uri;
    switch(this.props.title) {
      case TAB_TITLE_HOME:
        uri = require('../../assets/icons/Home.png');
        break;
      case TAB_TITLE_ORDER:
        uri = require('../../assets/icons/Order.png');
        break;
      case TAB_TITLE_FAVOURS:
        uri = require('../../assets/icons/Favours.png');
        break;
      default:
        uri = require('../../assets/icons/Mine.png');
    }
    return (
      <View>
        <Image source={uri} style={{marginLeft: 0, tintColor: this.props.selected ? 'red' : null}} />
        <Text style={{color: this.props.selected ? 'red' :'black', fontSize: 12}}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class Application extends Component {

  render() {
    return (
      <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
        <Scene key="root" hideNavBar={true}>
          <Scene key="productDetail" component={ProductDetail} />
          <Scene key="productList" component={ProductList} />
          <Scene key="tabBar" tabs={true} default="home" initial={true}>
            <Scene key="home" initial={true} component={Home} title={TAB_TITLE_HOME} hideNavBar={true} icon={TabIcon}/>
            <Scene key="order" component={Order} title={TAB_TITLE_ORDER} hideNavBar={hideNavBar} icon={TabIcon}/>
            <Scene key="favours" component={Favourite} title={TAB_TITLE_FAVOURS} hideNavBar={hideNavBar} icon={TabIcon}/>
            <Scene key="mine" component={Mine} title={TAB_TITLE_MINE} hideNavBar={true} icon={TabIcon}/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
