/**
 *  Class: container
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 手机银行
 */

const MockData_ICON = [
  {name: '银行公告', icon: require('../../../assets/icons/yhgg.png')},
  {name: '网点查询', icon: require('../../../assets/icons/wddt.png')},
  {name: '理财计算器', icon: require('../../../assets/icons/lcjsq.png')},
];

import React from 'react-native';

const { Component, View, Text, StyleSheet, Platform, ScrollView, Image } = React;
const Actions = require('react-native-router-flux').Actions;
import Button from '../../baseComponents/Button';
import GridView from '../../baseComponents/GridView';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      paddingHorizontal: 5
    },
    header: {
      height: 40,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 2
    },
    button: {flex: 1, margin: 0, borderWidth: 1, borderColor: '#f3f2f3', height: 100, borderRadius: 0, backgroundColor: '#FFF'},
  }
);

export default class Container extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={{fontSize: 16}}>金融助手</Text>
        </View>
        <ScrollView
          scrollsToTop={true}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}>
          <GridView style={{flex: 1}}
                    items={MockData_ICON}
                    itemsPerRow={3}
                    scrollEnabled={false}
                    rowHeight={100}
                    renderItem={this.renderItem.bind(this)}
          />
        </ScrollView>
      </View>
    );
  }

  renderItem(item) {
    return (
      <Button key={item.name} style={[styles.button]} >
        <Image style={{height: 40, width: 40}} source={item.icon} />
        <Text style={{marginTop: 10}}>
          {item.name}
        </Text>
      </Button>
    );
  }
}