/**
 *  Class: BannerDetail
 *  Author: Niu Xiaoyu
 *  Date: 16/4/1.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text } = React;

export default class BannerDetail extends Component {
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
      <View>
        <Text>
          BannerDetail
        </Text>
      </View>
    );
  }
}