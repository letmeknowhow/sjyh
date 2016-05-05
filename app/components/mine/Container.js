/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 我的主页
 */

const MockData_1 = [
  {id: 0, uri: require('../../../assets/icons/mine/xxzx.png'), text: '消息中心'}
];
const MockData_2 = [
  {id: 0, uri: require('../../../assets/icons/mine/cylk.png'), text: '常用旅客'},
  {id: 1, uri: require('../../../assets/icons/mine/cydz.png'), text: '常用地址'}
];
const MockData_3 = [
  {id: 0, uri: require('../../../assets/icons/mine/sz.png'), text: '设置'},
];
const MockData_4 = [
  {id: 0, uri: require('../../../assets/icons/mine/gywm.png'), text: '关于我们'}
];
import React from 'react-native';

const { Component, StyleSheet, View, Image, TouchableOpacity, Text } = React;
const Actions = require('react-native-router-flux').Actions;
import ButtonList from '../ButtonList';

const styles = StyleSheet.create({
  page: {flex: 1},
  header: {height: 200, alignItems: 'center', justifyContent: 'center'},
  logoContainer: {height: 200, width: 100, backgroundColor: 'transparent', paddingVertical: 50},
  logo: {height: 80, width: 80, borderRadius: 40, marginBottom: 20},
  text: {
    color: '#FFF',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    borderColor: '#FFF',
    height: 35,
    padding: 7,
    textAlign: 'center',
    marginLeft: -16
  }
});
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
        <Image style={styles.header} source={require('../../../assets/banner/1.png')}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../../assets/logo.jpg')} />
            <TouchableOpacity>
              <Text style={styles.text}>登陆/注册</Text>
            </TouchableOpacity>
          </View>
        </Image>
        <ButtonList buttons={MockData_1} action={Actions.myMessage} />
        <ButtonList style={{marginTop: 10}} buttons={MockData_2} action={Actions.commonUse}/>
        <ButtonList style={{marginTop: 10}} buttons={MockData_3} />
        <ButtonList style={{marginTop: 10}} buttons={MockData_4} action={Actions.aboutUs}/>
      </View>
    );
  }
}