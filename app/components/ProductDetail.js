/**
 *  Class: ProductDetail
 *  Author: Niu Xiaoyu
 *  Date: 16/4/1.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform, TouchableOpacity, WebView } = React;
var Actions = require('react-native-router-flux').Actions;

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3'
    },

  }
);

export default class ProductDetail extends Component {
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
      <View style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <View style={{height: 30, paddingLeft: 5}}>
          <TouchableOpacity onPress={Actions.pop}>
            <Text style={{fontSize: 28, color: 'red'}}>{'<'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center'}}>
          {this.props.data}
        </Text>
        <WebView
          refs={'web_view'}
          automaticallyAdjustContentInsets={false}
          style={{flex: 1, marginTop: 10}}
          source={this.props.url}
          javaScriptEnabledAndroid={true}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    );
  }
}