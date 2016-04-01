/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */
const MockData_banner = [
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
const MockData_ICON = [
  {name: '国内1', icon: require('../../../assets/icons/1.png')},
  {name: '国内2', icon: require('../../../assets/icons/2.png')},
  {name: '国内3', icon: require('../../../assets/icons/3.png')},
  {name: '国内4', icon: require('../../../assets/icons/4.png')},
  {name: '国内5', icon: require('../../../assets/icons/1.png')},
  {name: '国内6', icon: require('../../../assets/icons/2.png')},
];
import React from 'react-native';
const { Component, View, StyleSheet, Platform, Text, Image } = React;
import Banner from '../../baseComponents/Banner';
import Button from '../../baseComponents/Button';
import GridView from 'react-native-grid-view';
var Actions = require('react-native-router-flux').Actions;

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3'
    },
    header: {
      backgroundColor: '#ffda44'
    },
    badge: {
      borderRadius: 5,
      borderWidth: 0,
      width: 10,
      height: 10,
      backgroundColor: '#dd2b37',
      position: 'absolute',
      top: 0,
      right: 0
    },
    button: {flex: 1, marginBottom: 0, borderWidth: 0, height: 80}
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
        <View style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
          <Banner
            style={{height: 140, overflow: 'hidden', marginBottom: 10}}
            source={MockData_banner}
          />
          <GridView
            items={MockData_ICON}
            itemsPerRow={3}
            renderItem={this.renderItem.bind(this)}
          />
          <View style={{flex: 1, marginHorizontal: 3}}>
            <Text>首页</Text>
          </View>
        </View>
    );
  }

  renderItem(item) {
    return (
      <Button key={item.name} style={styles.button} onPress={Actions.searchList}>
        <Image source={item.icon}>
          { item.badge && (<View style={styles.badge}/>) }
        </Image>
        <Text style={{marginTop: 10}}>
          {item.name}
        </Text>
      </Button>
    );
  }
}