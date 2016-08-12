/**
 *  Class: Header
 *  Author: Niu Xiaoyu
 *  Date: 16/8/12.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text } = React;

export default class Header extends Component {
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

  // 渲染
  render() {
    return (
      <View>
        <Text>
          Header
        </Text>
      </View>
    );
  }
}