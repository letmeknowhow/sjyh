/**
 *  Class: AboutUs
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 我的主页
 */

const MockData_1 = [
  {id: 0, text: '新功能介绍'},
  {id: 1, text: '关于港中旅'},
  {id: 2, text: '意见反馈'},
  {id: 3, text: '关注我们'},
  {id: 4, text: '推荐港中旅旅游给好友'},
  {id: 5, text: '客服电话: 40008 45678'}
];
import React from 'react-native';

const { Component, StyleSheet, View, Image, TouchableOpacity, Text, Platform } = React;
import CommonHeader from '../CommonHeader';
import ButtonList from '../ButtonList';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f3f2f3'
  },
  header: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10
  },
});
export default class AboutUs extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <CommonHeader data={this.props.data} />
        <ButtonList buttons={MockData_1}/>
      </View>
    );
  }
}