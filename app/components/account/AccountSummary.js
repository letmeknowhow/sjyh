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
const MockData_2 = [
  {id: 0, text: '储蓄账户号', amount: '1234 **** **** 5678', amountColor: 'black', clickable: false},
  {id: 1, text: '活期结算户', amount: '888888.88', amountColor: '#399CE8', clickable: true},
  {id: 2, text: '定期结算户', amount: '666666.66', amountColor: '#399CE8', clickable: true}
];
const MockData_3 = [
  {id: 0, text: '信用卡', amount: '个人消费账户', amountColor: 'black', clickable: false},
  {id: 1, text: '可用额度', amount: '12345.67', amountColor: '#399CE8', clickable: true},
  {id: 2, text: '本期剩余应还人民币(元)', amount: '666.77', amountColor: 'red', clickable: true}
];

import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform } = React;
const Actions = require('react-native-router-flux').Actions;
import AccountButtonList from './AccountButtonList';
import CommonHeader from './../CommonHeader';

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
    },
    debit: {
      margin: 5,
      backgroundColor: '#399CE8',
      borderRadius: 5,
      paddingTop: 3,
      borderWidth: 1,
      borderColor: '#E7E7E7'
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

  // 渲染
  render() {
    return (
      <View style={styles.page}>
        <CommonHeader data={this.props.data} />
        <AccountButtonList buttons={MockData_1}/>
        <View style={styles.debit}>
          <AccountButtonList buttons={MockData_2}/>
        </View>
        <View style={[styles.debit, {backgroundColor: 'red'}]}>
          <AccountButtonList buttons={MockData_3}/>
        </View>
      </View>
    );
  }
}