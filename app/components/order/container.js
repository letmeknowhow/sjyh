/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 订单主页
 */

const MockData = [
  {id: 0, uri: require('../../../assets/icons/1.png'), text: '跟团游订单'},
  {id: 1, uri: require('../../../assets/icons/2.png'), text: '自助游订单'},
  {id: 2, uri: require('../../../assets/icons/3.png'), text: '游轮订单'},
  {id: 3, uri: require('../../../assets/icons/4.png'), text: '机票订单'},
  {id: 4, uri: require('../../../assets/icons/1.png'), text: '酒店订单'},
  {id: 5, uri: require('../../../assets/icons/2.png'), text: '门票订单'},
  {id: 6, uri: require('../../../assets/icons/3.png'), text: '团购订单'}
];

import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform } = React;
const Actions = require('react-native-router-flux').Actions;
import ButtonList from '../ButtonList';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      paddingHorizontal: 5
    },
    header: {
      height: 40,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    }
  }
);

export default class Container extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 自定义方法
  handle() {

  }

  // 渲染
  render() {

    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={{fontSize: 16}}>我的订单</Text>
        </View>
        <ButtonList style={{flex: 1}} buttons={MockData} action={Actions.orderDetail}/>
      </View>
    );
    //return (
    //  <ButtonList style={{marginTop: 64, flex: 1}} buttons={MockData}/>
    //);
  }
}