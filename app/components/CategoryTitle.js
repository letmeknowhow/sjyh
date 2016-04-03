/**
 *  Class: CategoryTitle
 *  Author: Niu Xiaoyu
 *  Date: 16/4/3.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text } = React;

export default class CategoryTitle extends Component {

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={[{height: 15,flexDirection: 'row', marginVertical: 10, paddingHorizontal: 10}, this.props.style]}>
        <View style={{width: 8, backgroundColor: 'red'}} />
        <Text style={{marginLeft: 10}}>{this.props.title}</Text>
      </View>
    );
  }
}