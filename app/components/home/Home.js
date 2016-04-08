/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */

const MockUrl = '../../../assets/HelloWorld.html';
const MockData_banner = [
  //{id: '1', uri: require('../../../assets/banner/usa.png'), url: {uri: 'http://pr.mangocity.com/us_trip/?zy=mgs_jx'}},
  {id: '1', uri: require('../../../assets/banner/usa.png'), url: MockUrl},
  {id: '2', uri: require('../../../assets/banner/2.png'), url: MockUrl},
  {id: '3', uri: require('../../../assets/banner/3.png'), url: MockUrl},
  {id: '4', uri: require('../../../assets/banner/4.png'), url: MockUrl}
];
const MockData_region1 = [
  {id: '1', uri: require('../../../assets/banner/1.png'), text: '桑拿, 蒸腾芬兰', url: MockUrl},
  {id: '2', uri: require('../../../assets/banner/2.png'), text: '伦敦, 新西区时代', url: MockUrl},
  {id: '3', uri: require('../../../assets/banner/3.png'), text: '马里, 西非DNA', url: MockUrl},
  {id: '4', uri: require('../../../assets/banner/4.png'), text: '曼哈顿, 文艺彻骨', url: MockUrl}
];
const MockData_region2 = [
  {
    id: '1', uri: require('../../../assets/banner/1.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '焦作',
    price: '￥1999.0起',
    category: '跟团游',
    url: MockUrl
  },
  {
    id: '2', uri: require('../../../assets/banner/2.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '深圳',
    price: '￥599.0起',
    category: '自助游',
    url: MockUrl
  },
  {
    id: '3', uri: require('../../../assets/banner/3.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '大连',
    price: '￥2999.0起',
    category: '自助游',
    url: MockUrl
  },
  {
    id: '4', uri: require('../../../assets/banner/4.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '焦作',
    price: '￥999.0起',
    category: '跟团游',
    url: MockUrl
  },
  {
    id: '5', uri: require('../../../assets/banner/1.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '郑州',
    price: '￥1999.0起',
    category: '自助游',
    url: MockUrl
  },
  {
    id: '6', uri: require('../../../assets/banner/2.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '北京',
    price: '￥1999.0起',
    category: '跟团游',
    url: MockUrl
  },
  {
    id: '7', uri: require('../../../assets/banner/3.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '珠海',
    price: '￥699.0起',
    category: '跟团游',
    url: MockUrl
  },
  {
    id: '8', uri: require('../../../assets/banner/4.png'),
    title: `<曼谷+芭提雅6日跟团游>万人折服谁定大会/五族城堡/千年云石公园/地道美食一价全含`,
    text: '1.全国独家万人水灯祈福 | 2.浪漫夜游湄南河...',
    starting: '天津',
    price: '￥3999.0起',
    category: '自助游',
    url: MockUrl
  }
];
const MockData_ICON = [
  {name: '跟团游', icon: require('../../../assets/icons/gty.png')},
  {name: '自助游', icon: require('../../../assets/icons/zzy.png')},
  {name: '游轮', icon: require('../../../assets/icons/yl.png')},
  {name: '门票', icon: require('../../../assets/icons/mp.png')},
  {name: '酒店', icon: require('../../../assets/icons/jd.png')},
  {name: '机票', icon: require('../../../assets/icons/jp.png')},
  {name: '包团', icon: require('../../../assets/icons/bt.png')},
  {name: '团购', icon: require('../../../assets/icons/tg.png')},
];
import React from 'react-native';
const { Component, View, StyleSheet, Platform, Text, Image, ScrollView, Dimensions, TouchableOpacity } = React;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
import Banner from '../../baseComponents/Banner';
import Button from '../../baseComponents/Button';
import CategoryTitle from '../CategoryTitle';
import GridView from 'react-native-grid-view';
var Actions = require('react-native-router-flux').Actions;

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3',
      marginTop: Platform.OS === 'ios' ? 20 : 0,
      paddingHorizontal: 5
    },
    banner: {height: 140, overflow: 'hidden', marginBottom: 10},
    button: {flex: 1, margin: 5, borderWidth: 0, height: 80},
    region1: {flex: 1, margin: 2, borderWidth: 0, height: 160, alignItems: 'stretch', justifyContent: 'center'},
    nestedText: {
      marginLeft: 12,
      marginTop: 140,
      backgroundColor: 'transparent',
      color: 'white'
    },
    nestedText2: {
      color: 'white',
      fontSize: 10,
      padding: 2,
      width: 35
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
            <GridView style={{height: 190}}
              items={MockData_ICON}
              itemsPerRow={4}
              scrollEnabled={false}
              renderItem={this.renderItem.bind(this)}
            />
            <CategoryTitle title='旅行家'/>
            <GridView style={{marginHorizontal: 0}}
              items={MockData_region1}
              scrollEnabled={false}
              itemsPerRow={2}
              renderItem={this.renderRegion1.bind(this)}
            />
            <View style={{height: 3, marginVertical: 5, backgroundColor: 'gray'}} />
            <CategoryTitle title='优惠专区'/>
            <View style={{marginHorizontal: 5}}>
              {this.renderRegion2()}
            </View>
            <View style={{marginHorizontal: 5, height: 70, alignItems: 'center'}}>
              <Text>全部加载完成</Text>
            </View>
          </ScrollView>
        </View>
    );
  }

  renderItem(item) {
    return (
      <Button key={item.name} style={[styles.button]} onPress={() => Actions.productList({data: item.name, url: item.url})}>
        <Image style={{height: 40, width: 40}} source={item.icon}>
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
      <TouchableOpacity key={item.id} style={styles.region1} onPress={() => Actions.productDetail({data: item.text, url: item.url})}>
        <Image style={{flex: 1, width: deviceWidth / 2 - 10}} source={item.uri} resizeMode={'stretch'} >
          <Text style={styles.nestedText}>
            {item.text}
          </Text>
        </Image>
      </TouchableOpacity>
    );
  }

  renderRegion2() {
    return MockData_region2.map((item) => {
      let bgColor = {backgroundColor: 'green'};
      if(item.category === '跟团游') {
        bgColor = {backgroundColor: 'orange'}
      }
      return (
        <TouchableOpacity key={item.id} onPress={() => Actions.productDetail({data: item.title, url: item.url})}
                          style={{height: 80, width: deviceWidth - 10, flexDirection: 'row', marginVertical:3}}>
          <Image style={{width: 80, height: 80}} source={item.uri}>
            <Text style={[styles.nestedText2, bgColor]}>{item.category}</Text>
          </Image>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={{fontWeight: '400', fontSize: 13}}>{item.title}</Text>
            <Text style={{fontWeight: '200', fontSize: 12}}>{item.text}</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12, fontWeight: '200'}}>{`出发地: ${item.starting}`}</Text>
              <Text style={{fontSize: 16, color: 'red'}}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
}