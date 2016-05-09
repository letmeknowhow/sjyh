/**
 *  Class: ConfigMenu
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description:
 */
const MockData_1 = [
  {id: 0, uri: require('../../../assets/icons/mine/xxzx.png'), text: '登录密码修改'},
  {id: 1, uri: require('../../../assets/icons/mine/cydz.png'), text: '限额设置'},
  {id: 2, uri: require('../../../assets/icons/mine/cylk.png'), text: '用户名设置'}
];
const MockData_2 = [
  {id: 0, uri: require('../../../assets/icons/mine/gywm.png'), text: '账号保护'},
  {id: 1, uri: require('../../../assets/icons/mine/qb.png'), text: '预留信息设置'},
  {id: 2, uri: require('../../../assets/icons/mine/sz.png'), text: '交易密码修改'}
];
const MockData_3 = [
  {id: 0, uri: require('../../../assets/icons/mine/qb.png'), text: '手势密码'},
  {id: 1, uri: require('../../../assets/icons/mine/sz.png'), text: '短信提醒管理'},
];
import React from 'react-native';

const { Component, View, Text, StyleSheet, Dimensions, ScrollView, Image } = React;

import ButtonList from '../ButtonList';

const window = Dimensions.get('window');
const myPortrait = require('../../../assets/icons/mine/sz.png');
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    //flex: 1,
  },
  name: {
    //position: 'absolute',
    //left: 70,
    //top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default class ConfigMenu extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

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
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={myPortrait}/>
          <Text style={styles.name}>设置</Text>
        </View>
        <ButtonList style={{width: 210}} buttonHeight={30} buttons={MockData_1} />
        <ButtonList style={{width: 210, marginTop: 10}} buttonHeight={30} buttons={MockData_2} />
        <ButtonList style={{width: 210, marginTop: 10}} buttonHeight={30} buttons={MockData_3} />
      </ScrollView>
    );
  }
}
