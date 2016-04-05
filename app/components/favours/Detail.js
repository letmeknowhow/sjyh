/**
 *  Class: detail
 *  Author: Niu Xiaoyu
 *  Date: 16/4/5.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform, TouchableOpacity, Image } = React;
const Actions = require('react-native-router-flux').Actions;

const styles = StyleSheet.create(
  {
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
      backgroundColor: '#FFF'
    },
    body_content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#FFF'
    },

  }
);
export default class Detail extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      option: 0
    };
  }

  // 渲染
  render() {
    return (
      <View style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <View style={styles.header}>
          <TouchableOpacity style={{paddingBottom: 3, backgroundColor: 'transparent'}} onPress={Actions.pop}>
            <Text style={{fontSize: 28, height: 30, color: 'red'}}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1, textAlign: 'center'}}>
            {this.props.data}
          </Text>
        </View>
        <View style={styles.body_content}>
          <Image style={{width: 100, height: 100}} source={require('../../../assets/logo.jpg')}  />
          <Text style={{fontWeight: '100'}}>{`暂时没有${this.props.data}`}</Text>
        </View>
      </View>
    );
  }
}