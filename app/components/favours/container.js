/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 收藏主页
 */

const MockData = [
  {id: 0, uri: require('../../../assets/icons/jd.png'), text: '酒店收藏'},
  {id: 1, uri: require('../../../assets/icons/gty.png'), text: '跟团游收藏'},
  {id: 2, uri: require('../../../assets/icons/yl.png'), text: '游轮收藏'},
  {id: 3, uri: require('../../../assets/icons/mp.png'), text: '门票收藏'},
  {id: 4, uri: require('../../../assets/icons/zzy.png'), text: '自助游收藏'}
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
          <Text style={{fontSize: 16}}>我的收藏</Text>
        </View>
        <ButtonList style={{flex: 1}} buttons={MockData} action={Actions.favoursDetail} />
      </View>
    );
  }
}