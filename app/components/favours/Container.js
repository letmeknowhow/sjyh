/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 收藏主页
 */

const MockData = [
  {id: 0, uri: require('../../../assets/icons/khzz.png'), text: '存款计算器'},
  {id: 1, uri: require('../../../assets/icons/lcjsq.png'), text: '国债计算器'},
  {id: 2, uri: require('../../../assets/icons/khgj.png'), text: '贷款计算器'},
  {id: 3, uri: require('../../../assets/icons/jymx.png'), text: '按揭贷款计算器'},
  {id: 4, uri: require('../../../assets/icons/sfjf.png'), text: '账单分期计算器'}
];

const MOCKDATA_2 = [
  {id: 0, uri: require('../../../assets/icons/sjcz.png'), text: '手机充值'},
  {id: 1, uri: require('../../../assets/icons/dfjf.png'), text: '电费缴费'},
  {id: 2, uri: require('../../../assets/icons/sfjf.png'), text: '水费缴费'},
  {id: 3, uri: require('../../../assets/icons/rqjf.png'), text: '燃气缴费'},
  {id: 4, uri: require('../../../assets/icons/jfcx.png'), text: '缴费查询'}
];

import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform, TouchableOpacity, Image } = React;
const Actions = require('react-native-router-flux').Actions;
import ButtonList from '../ButtonList';
import SceneHeader from '../../baseComponents/SceneHeader';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      paddingHorizontal: 5
    },
    header: {
      height: 40,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    button: {
      height: 50,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: '#E7E7E7',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#FFF',
      paddingHorizontal: 15
    },
    icon: {
      height: 25,
      width: 25,
      marginRight: 20
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
    const store = this.props.store.sidemenu;
    return (
      <View style={styles.page}>
        <SceneHeader sceneStore={store} title="助手" />
        <ButtonList style={{marginBottom: 10}} buttons={MockData}/>
        <ButtonList buttons={MOCKDATA_2} renderButton={this.renderButton.bind(this)}/>
      </View>
    );
  }

  renderButton(button) {
    return (
      <TouchableOpacity key={button.id} style={[styles.button]}
                        onPress={() => this.getAction(button.text)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.icon} source={button.uri}/>
          <Text style={{fontSize: 16}}>{button.text}</Text>
        </View>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    );
  }

  getAction(button) {
    let action;
    switch (button) {
      case '手机充值':
        action = Actions.payment({data: button, feeType: '手机缴费', label: '手机号码:', placeHolder: '请输入手机号码'});
        break;
      case '电费缴费':
        action = Actions.payment({data: button, feeType: '电费', label: '用户编号:', placeHolder: '请输入用户编号'});
        break;
      case '水费缴费':
        action = Actions.payment({data: button, feeType: '水费', label: '用户编号:', placeHolder: '请输入用户编号'});
        break;
      case '燃气缴费':
        action = Actions.payment({data: button, feeType: '燃气费', label: '用户编号:', placeHolder: '请输入用户编号'});
        break;
      case '缴费查询':
        action = Actions.paymentSearch({data: button});
        break;
      default:
    }
    return action;
  }
}