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
            color: #ff081c;
      }
    </style>
  </head>
  <body>
    <h1>你好! 港中旅!</h1>
    <h1>这是一个html页面</h3>
  </body>
</html>
`;
import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform, TouchableOpacity, WebView } = React;
import CommonHeader from '../CommonHeader';

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
        <CommonHeader data={this.props.data} />
        <WebView
          refs={'web_view'}
          automaticallyAdjustContentInsets={false}
          style={{flex: 1}}
          //source={{uri: this.props.url}}
          source={{html: Mock_HTML}}
          javaScriptEnabled={true}
          startInLoadingState={true}
          //scalesPageToFit={true}
        />
      </View>
    );
  }
}