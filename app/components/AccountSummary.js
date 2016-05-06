/**
 *  Class: AccountSummary
 *  Author: Niu Xiaoyu
 *  Date: 16/5/6.
 *  Description: 账户总览
 */

const MockData_1 = [
  {id: 0, text: '总资产(元)', amount: '888888.88', amountColor: '#399CE8', clickable: false},
  {id: 1, text: '总负债(元)', amount: '8888.88', amountColor: 'red', clickable: false}
];

import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform } = React;
const Actions = require('react-native-router-flux').Actions;
import AccountButtonList from './AccountButtonList';
import CommonHeader from './CommonHeader';

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
        <CommonHeader data={this.props.data} />
        <AccountButtonList style={{flex: 1}} buttons={MockData_1} action={Actions.favoursDetail} />
      </View>
    );
  }
}