/**
 *  Class: ProductList
 *  Author: Niu Xiaoyu
 *  Date: 16/4/3.
 *  Description:
 */

const MockData_hot = [
  {
    id: '1', uri: require('../../assets/banner/1.png'),
    title: `<韩国首尔+济州岛5日超值跟团游>深起港止/升级一晚五花特二酒店/韩华水族馆/普罗旺斯村...`,
    text: '畅游韩国最具代表性建筑和国内热播并且收视率极高的韩剧拍摄地...',
    price: '￥1999.0起/人'

  },
  {
    id: '2', uri: require('../../assets/banner/2.png'),
    title: `<韩国首尔+济州岛5日超值跟团游>深起港止/升级一晚五花特二酒店/韩华水族馆/普罗旺斯村...`,
    text: '畅游韩国最具代表性建筑和国内热播并且收视率极高的韩剧拍摄地...',
    price: '￥599.0起/人'
  },
  {
    id: '3', uri: require('../../assets/banner/3.png'),
    title: `<韩国首尔+济州岛5日超值跟团游>深起港止/升级一晚五花特二酒店/韩华水族馆/普罗旺斯村...`,
    text: '畅游韩国最具代表性建筑和国内热播并且收视率极高的韩剧拍摄地...',
    price: '￥2999.0起/人'
  }
];

import React from 'react-native';

const { Component, View, Text, StyleSheet, TouchableOpacity, Platform, Image, TextInput, Dimensions } = React;
import Swiper from 'react-native-swiper';
const deviceWidth = Dimensions.get('window').width;
import CategoryTitle from './CategoryTitle';
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 5
  }
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
            <Image style={{height: 20, width: 20}} source={require('../../assets/icons/search.png')} />
            <TextInput style={{flex: 1, fontSize: 14}} placeholder='目的地或关键字' />
          </View>
          <Text style={{color: 'red', fontSize: 16}}>深圳 Ⅴ</Text>
        </View>
        <CategoryTitle style={{backgroundColor: '#FFF',paddingVertical: 12, marginBottom: 0, height: 40}} title='当季热卖'/>
        <Swiper style={styles.banner} showsButtons={false} height={250}
                dot={<View style={{backgroundColor:'gray', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                activeDot={<View style={{backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                paginationStyle={{bottom: 0 }}
        >
          {this.renderHot()}
        </Swiper>
        <CategoryTitle style={{backgroundColor: '#FFF',paddingVertical: 12, marginBottom: 0, height: 40}} title='港澳专区'/>
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
            <Text style={{flex: 2, fontWeight: '200', fontSize: 12}}>{item.text}</Text>
            <Text style={{flex: 1, fontSize: 18, color: 'red'}}>{item.price}</Text>
          </View>
        </View>
      </View>
    )
  }
}