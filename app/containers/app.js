/**
 * Created by gaoletian on 15/11/25.
 */

import React from 'react-native';
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
const { Component,View, Navigator, Text, StyleSheet, Platform, BackAndroid, Alert } = React;


//import LoadSpinner from '../components/LoadSpinner';
/** 主tab 四页*/
import Home from '../components/home/Home';
import Order from '../components/order/container';
import Favourite from '../components/favourite/container';
import Mine from '../components/mine/container';



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
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

export default class Application extends Component {

  render() {
    return (
        <Router createReducer={reducerCreate} sceneStyle={{backgroundColor:'#F7F7F7'}}>
          <Scene key="root" hideNavBar={true}>
             <Scene key="tabBar" tabs={true} default="home" initial={true}>
               <Scene key="home" component={Home} title="首页" hideNavBar={true} icon={TabIcon}/>
               <Scene key="order" component={Order} title="订单" hideNavBar={hideNavBar} icon={TabIcon}/>
               <Scene key="favourite" component={Favourite} title="收藏" hideNavBar={true} icon={TabIcon}/>
               <Scene key="mine" component={Mine} title="我的" hideNavBar={hideNavBar} icon={TabIcon}/>
              </Scene>
          </Scene>
        </Router>
    );
  }
}
