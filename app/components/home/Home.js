/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */
const MockData_banner = [
  {id: '1', url: require('../../../assets/banner/1.png')},
  {id: '2', url: require('../../../assets/banner/2.png')},
  {id: '3', url: require('../../../assets/banner/3.png')},
  {id: '4', url: require('../../../assets/banner/4.png')}
];
const MockData_region1 = [
  {id: '1', url: require('../../../assets/banner/1.png'), text: '桑拿, 蒸腾芬兰'},
  {id: '2', url: require('../../../assets/banner/2.png'), text: '伦敦, 新西区时代'},
  {id: '3', url: require('../../../assets/banner/3.png'), text: '马里, 西非DNA'},
  {id: '4', url: require('../../../assets/banner/4.png'), text: '曼哈顿, 文艺彻骨'}
];
const MockData_region2 = [
  {id: '1', url: require('../../../assets/icons/1.png'), text: '芬兰'},
  {id: '2', url: require('../../../assets/icons/2.png'), text: '丹麦'},
  {id: '3', url: require('../../../assets/icons/3.png'), text: '日本'},
  {id: '4', url: require('../../../assets/icons/4.png'), text: '英国'}
];
const MockData_ICON = [
  {name: '跟团游', icon: require('../../../assets/icons/1.png')},
  {name: '自助游', icon: require('../../../assets/icons/2.png')},
  {name: '游轮', icon: require('../../../assets/icons/3.png')},
  {name: '门票', icon: require('../../../assets/icons/4.png')},
  {name: '酒店', icon: require('../../../assets/icons/1.png')},
  {name: '机票', icon: require('../../../assets/icons/2.png')},
  {name: '包团', icon: require('../../../assets/icons/3.png')},
  {name: '团购', icon: require('../../../assets/icons/4.png')},
];
import React from 'react-native';
const { Component, View, StyleSheet, Platform, Text, Image, ScrollView, Dimensions, TouchableOpacity } = React;
const deviceWidth = Dimensions.get('window').width;
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
    button: {flex: 1, margin: 5, borderWidth: 0, height: 80},
    region1: {flex: 1, margin: 5, borderWidth: 0, height: 160, alignItems: 'stretch'},
    nestedText: {
      marginLeft: 12,
      marginTop: 140,
      backgroundColor: 'transparent',
      color: 'white'
    },
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
          <ScrollView showsVerticalScrollIndicator={false} directionalLockEnabled={true}>
            <Banner
              style={{height: 140, overflow: 'hidden', marginBottom: 10}}
              source={MockData_banner}
            />
            <GridView style={{height: 190}}
              items={MockData_ICON}
              itemsPerRow={4}
              scrollEnabled={false}
              renderItem={this.renderItem.bind(this)}
            />
            <Text style={{margin: 10}}>旅行家</Text>
            <GridView style={{marginHorizontal: 5}}
              items={MockData_region1}
              scrollEnabled={false}
              itemsPerRow={2}
              renderItem={this.renderRegion1.bind(this)}
            />
            <View style={{height: 3, marginVertical: 5, backgroundColor: 'gray'}} />
            <Text style={{margin: 10}}>优惠专区</Text>
            <View style={{marginHorizontal: 5, height: 600}}>
              {this.renderRegion2()}
            </View>
          </ScrollView>
        </View>
    );
  }

  renderItem(item) {
    return (
      <Button key={item.name} style={[styles.button, {}]} onPress={Actions.searchList}>
        <Image source={item.icon}>
          { item.badge && (<View style={styles.badge}/>) }
        </Image>
        <Text style={{marginTop: 10}}>
          {item.name}
        </Text>
      </Button>
    );
  }

  renderRegion1(item) {
    return (
      <TouchableOpacity key={item.id} style={styles.region1} onPress={Actions.searchList}>
        <Image style={{flex: 1, width: deviceWidth / 2 - 20}} source={item.url} resizeMode={'stretch'} >
          <Text style={styles.nestedText}>
            {item.text}
          </Text>
        </Image>
      </TouchableOpacity>
    );
  }

  renderRegion2() {
    return MockData_region1.map((item) => {
      return (
        <View key={item.id} style={{height: 80, width: deviceWidth - 10, flexDirection: 'row', marginVertical:3}}>
          <Image style={{width: 80, height: 80}} source={item.url} />
          <Text>{item.text}</Text>
        </View>
      );
    });
  }
}