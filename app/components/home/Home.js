/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */

const MockUrl = '../../../assets/HelloWorld.html';
const MockData_banner = [
  //{id: '1', uri: require('../../../assets/banner/usa.png'), url: {uri: 'http://pr.mangocity.com/us_trip/?zy=mgs_jx'}},
  {id: '1', uri: require('../../../assets/banner/1.png'), url: MockUrl},
  {id: '2', uri: require('../../../assets/banner/2.png'), url: MockUrl},
  {id: '3', uri: require('../../../assets/banner/3.png'), url: MockUrl},
  {id: '4', uri: require('../../../assets/banner/4.png'), url: MockUrl}
];
const MockData_ICON = [
  {name: '账户查询', icon: require('../../../assets/icons/gty.png')},
  {name: '跨行转账', icon: require('../../../assets/icons/zzy.png')},
  {name: '卡卡转账', icon: require('../../../assets/icons/yl.png')},
  {name: '行内转账', icon: require('../../../assets/icons/mp.png')},
  {name: '活期转定期', icon: require('../../../assets/icons/jd.png')},
  {name: '添加', icon: require('../../../assets/icons/jp.png')},
];
import React from 'react-native';
const { Component, View, StyleSheet, Platform, Text, Image, ScrollView, Dimensions, TouchableOpacity } = React;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
import Banner from '../../baseComponents/Banner';
import Button from '../../baseComponents/Button';
import CategoryTitle from '../CategoryTitle';
import GridView from '../../baseComponents/GridView';
var Actions = require('react-native-router-flux').Actions;
import SideMenu from 'react-native-side-menu';
import MenuContent from './ConfigMenu';

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      paddingHorizontal: 5
    },
    banner: {height: 140, overflow: 'hidden', marginBottom: 10, marginTop: Platform.OS === 'ios' ? 20 : 0,},
    button: {flex: 1, margin: 0, borderWidth: 1, borderColor: '#f3f2f3', height: 100, borderRadius: 0, backgroundColor: '#FFF'},

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
    this.state = {
      isOpen: false
    };
  }

  // 渲染
  render() {
    return (
      <SideMenu
        menu={<MenuContent />}
        isOpen={this.state.isOpen}
        menuPosition="left"
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <View style={[styles.page]}>
          <ScrollView
            scrollsToTop={true}
            showsVerticalScrollIndicator={false}
            directionalLockEnabled={true}>
            <Banner
              style={styles.banner}
              source={MockData_banner}
              height={140}
            />
            <GridView style={{flex: 1}}
              items={MockData_ICON}
              itemsPerRow={3}
              scrollEnabled={false}
              rowHeight={100}
              renderItem={this.renderItem.bind(this)}
            />
          </ScrollView>
        </View>
      </SideMenu>
    );
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  renderItem(item) {
    return (
      <Button key={item.name} style={[styles.button]} onPress={() => Actions.productList({data: item.name, url: item.url})}>
        <Image style={{height: 40, width: 40}} source={item.icon} />
        <Text style={{marginTop: 10}}>
          {item.name}
        </Text>
      </Button>
    );
  }
}