/**
 *  Class: ProductDetail
 *  Author: Niu Xiaoyu
 *  Date: 16/4/1.
 *  Description:
 */
const Mock_HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>你好! 港中旅!</h1>
  </body>
</html>
`;
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

  // 渲染
  render() {
    return (
      <View style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <View style={{height: 30, paddingLeft: 5, paddingRight: 10, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={Actions.pop}>
            <Text style={{fontSize: 28, color: 'red'}}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1, textAlign: 'center'}}>
            {this.props.data}
          </Text>
        </View>
        <WebView
          refs={'web_view'}
          automaticallyAdjustContentInsets={false}
          style={{flex: 1, marginTop: 10}}
          //source={{uri: this.props.url}}
          source={{html: Mock_HTML}}
          javaScriptEnabled={true}
          //startInLoadingState={true}
          //scalesPageToFit={true}
        />
      </View>
    );
  }
}