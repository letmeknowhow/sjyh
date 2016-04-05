/**
 *  Class: ProductList
 *  Author: Niu Xiaoyu
 *  Date: 16/4/3.
 *  Description:
 */
const MockUrl = require('../../../assets/HelloWorld.html');
const MockData_hot = [
  {
    id: '1', uri: require('../../../assets/banner/1.png'),
    title: `<韩国首尔+济州岛5日超值跟团游>深起港止/升级一晚五花特二酒店/韩华水族馆/普罗旺斯村...`,
    text: '畅游韩国最具代表性建筑和国内热播并且收视率极高的韩剧拍摄地...',
    price: '￥1999.0起/人',
    url: MockUrl
  },
  {
    id: '2', uri: require('../../../assets/banner/2.png'),
    title: `<韩国首尔+济州岛5日超值跟团游>深起港止/升级一晚五花特二酒店/韩华水族馆/普罗旺斯村...`,
    text: '畅游韩国最具代表性建筑和国内热播并且收视率极高的韩剧拍摄地...',
    price: '￥599.0起/人',
    url: MockUrl
  },
  {
    id: '3', uri: require('../../../assets/banner/3.png'),
    title: `<韩国首尔+济州岛5日超值跟团游>深起港止/升级一晚五花特二酒店/韩华水族馆/普罗旺斯村...`,
    text: '畅游韩国最具代表性建筑和国内热播并且收视率极高的韩剧拍摄地...',
    price: '￥2999.0起/人',
    url: MockUrl
  }
];

const MockData_gangao = [
  {
    id: '1', uri: require('../../../assets/banner/1.png'),
    title: `[澳门]1日游 纯玩观光`,
    date: '多个团期',
    starting: '',
    price: '￥138.0起/人',
    url: MockUrl
  },
  {
    id: '2', uri: require('../../../assets/banner/2.png'),
    title: `[香港]1日游 深圳湾口岸出发/星光花园/太平山顶狮子厅/维多利亚海港...`,
    date: '多个团期',
    starting: '',
    price: '￥263.0起/人',
    url: MockUrl
  },
  {
    id: '3', uri: require('../../../assets/banner/3.png'),
    title: `[香港]1日游 迪士尼乐园+澳门3日游 畅玩香港迪士尼乐园/夜游维多利亚海港...`,
    date: '多个团期',
    starting: '',
    price: '￥1480.0起/人',
    url: MockUrl
  }
];

const MockData_mainland = [
  {
    id: '1', uri: require('../../../assets/banner/1.png'),
    title: `<张家界+天门山+凤凰4日跟团游>深圳高铁往返/纯玩/黄龙洞...`,
    date: '多个团期',
    starting: '深圳',
    price: '￥2570.0起/人',
    url: MockUrl
  },
  {
    id: '2', uri: require('../../../assets/banner/2.png'),
    title: `<九寨沟+牟尼沟+绵阳5日跟团游>深圳双飞往返/杜鹃山+特色藏寨+中...`,
    date: '多个团期',
    starting: '深圳',
    price: '￥1399.0起/人',
    url: MockUrl
  },
  {
    id: '3', uri: require('../../../assets/banner/3.png'),
    title: `<三亚4日跟团游>深圳双飞+三亚进出+入住蜈支洲岛木楼别墅+海岛...`,
    date: '多个团期',
    starting: '深圳',
    price: '￥1860.0起/人',
    url: MockUrl
  }
];

import React from 'react-native';

const { Component, View, Text, StyleSheet, TouchableOpacity, Platform, Image, TextInput, Dimensions, ScrollView } = React;
import Swiper from 'react-native-swiper';
const deviceWidth = Dimensions.get('window').width;
import CategoryTitle from './../CategoryTitle';
var Actions = require('react-native-router-flux').Actions;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f3f2f3',
    marginTop: Platform.OS === 'ios' ? 20 : 0
  },
  header: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  headerSearch: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10
  },
  banner: {
    overflow: 'hidden',
    //marginBottom: 10,
    backgroundColor: '#FFF'
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 5
  },
  nestedText: {
    backgroundColor: 'rgba(0,0,0,.6)',
    color: 'white',
    textAlign: 'right',
    padding: 5
  },
});
export default class ProductList extends Component {

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity onPress={Actions.pop}>
            <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>{'<'}</Text>
          </TouchableOpacity>
          <View style={styles.headerSearch}>
            <Text style={{fontSize: 14}}>{this.props.data}</Text>
            <Text style={{fontSize: 24, color: '#E7E7E7'}}>{` | `}</Text>
            <Image style={{height: 20, width: 20}} source={require('../../../assets/icons/search.png')} />
            <TextInput style={{flex: 1, fontSize: 14}} placeholder='目的地或关键字' />
          </View>
          <Text style={{color: 'red', fontSize: 16}}>深圳 Ⅴ</Text>
        </View>
        <ScrollView
          scrollsToTop={true}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
        >
          <CategoryTitle style={{backgroundColor: '#FFF',paddingVertical: 12, marginBottom: 0, height: 40}} title='当季热卖'/>
          <Swiper style={styles.banner} showsButtons={false} height={250}
                  dot={<View style={{backgroundColor:'gray', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                  activeDot={<View style={{backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                  paginationStyle={{bottom: 0 }}
          >
            {this.renderHot()}
          </Swiper>
          <CategoryTitle style={{backgroundColor: '#FFF',paddingVertical: 12, marginBottom: 0, height: 40}} title='港澳专区'/>
          <Image style={{width: deviceWidth - 10, height: 100, marginHorizontal: 5, justifyContent: 'flex-end'}}
                 resizeMode='stretch' source={require('../../../assets/hongkong.png')}
          >
            <Text style={styles.nestedText}>香港</Text>
          </Image>
          <View style={{marginHorizontal: 5, backgroundColor: '#FFF'}}>
            {this.renderRegion2(MockData_gangao)}
          </View>
          <CategoryTitle style={{backgroundColor: '#FFF',paddingVertical: 12, marginBottom: 0, height: 40}} title='国内跟团游'/>
          <Image style={{width: deviceWidth - 10, height: 100, marginHorizontal: 5, justifyContent: 'flex-end'}}
                 resizeMode='stretch' source={require('../../../assets/xiamen.png')}
          >
            <Text style={styles.nestedText}>厦门</Text>
          </Image>
          <View style={{marginHorizontal: 5, backgroundColor: '#FFF'}}>
            {this.renderRegion2(MockData_mainland)}
          </View>
          <CategoryTitle style={{backgroundColor: '#FFF',paddingVertical: 12, marginBottom: 0, height: 40}} title='国外跟团游'/>
          <View style={{height: 100, flexDirection: 'row', backgroundColor: '#FFF', paddingHorizontal: 5}}>
            <Image style={{width: (deviceWidth - 20) / 3, height: 100, justifyContent: 'flex-end', marginRight: 5}} source={require('../../../assets/korea.png')} >
              <Text style={styles.nestedText}>韩国</Text>
            </Image>
            <Image style={{width: (deviceWidth - 20) / 3, height: 100, justifyContent: 'flex-end', marginRight: 5}} source={require('../../../assets/japan.png')} >
              <Text style={styles.nestedText}>日本</Text>
            </Image>
            <Image style={{width: (deviceWidth - 20) / 3, height: 100, justifyContent: 'flex-end'}} source={require('../../../assets/europe.png')} >
              <Text style={styles.nestedText}>欧洲</Text>
            </Image>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderHot() {
    return MockData_hot.map((item) => {
      return (
        <BannerSlider key={item.id} source={item} />
      );
    });
  }

  renderRegion2(source) {
    return source.map((item) => {
      return (
        <TouchableOpacity key={item.id} onPress={() => Actions.productDetail({data: item.title, url: item.url})}
                          style={{height: 80, width: deviceWidth - 10, flexDirection: 'row', marginVertical:3}}>
          <Image style={{width: 80, height: 80}} source={item.uri}/>
          <View style={{flex: 1, marginHorizontal: 10}}>
            <Text style={{fontWeight: '400', fontSize: 13}}>{item.title}</Text>
            <Text style={{fontWeight: '200', fontSize: 12}}>{`出发城市: ${item.starting}`}</Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12, fontWeight: '200'}}>{`出发日期: ${item.date}`}</Text>
              <Text style={{fontSize: 16, color: 'red'}}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }
}

class BannerSlider extends Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  render() {
    let item = this.props.source;
    return (
      <View style={styles.slide} key={item.id}>
        <Image style={{height: 150, width: deviceWidth - 10, resizeMode: 'stretch'}} source={item.uri}/>
        <View style={{width: deviceWidth - 10, marginHorizontal: 10}}>
          <Text style={{fontWeight: '400', fontSize: 13}}>{item.title}</Text>
          <View style={{flex: 1, marginTop: 10, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
            <Text style={{flex: 2, fontWeight: '200', fontSize: 13}}>{item.text}</Text>
            <Text style={{flex: 1, fontSize: 18, color: 'red'}}>{item.price}</Text>
          </View>
        </View>
      </View>
    )
  }
}