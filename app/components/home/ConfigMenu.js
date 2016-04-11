/**
 *  Class: ConfigMenu
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, Dimensions, ScrollView, Image } = React;

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
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
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

        <Text style={styles.item}>关于</Text>
        <Text style={styles.item}>其他</Text>
      </ScrollView>
    );
  }
}
