/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */
import React from 'react-native';

import Banner from '../../baseComponents/Banner';

const { Component, View, StyleSheet, Platform, Text } = React;

const mockData_banner = [
  {
    id: '1',
    url: require('../../../assets/banner/1.png')
  },
  {
    id: '2',
    url: require('../../../assets/banner/2.png')
  },
  {
    id: '3',
    url: require('../../../assets/banner/3.png')
  },
  {
    id: '4',
    url: require('../../../assets/banner/4.png')
  }
];

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3'
    },
    header: {
      backgroundColor: '#ffda44'
    }
  }
);

export default class Home extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染
  render() {
    return (
        <View style={styles.page}>
          <Banner
            style={{height: 140, overflow: 'hidden', marginBottom: 10}}
            source={mockData_banner}
            {...this.props}
          />
          <View style={{flex: 1, marginHorizontal: 3}}>
            <Text>首页</Text>
          </View>
        </View>
    );
  }
}