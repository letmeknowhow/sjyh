/**
 *  Class: Banner
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 轮播图
 */
import React from 'react-native';
//import ViewPager from 'react-native-viewpager';
import Swiper from 'react-native-swiper';
var Actions = require('react-native-router-flux').Actions;
const { Component, Dimensions, View, Image, TouchableOpacity, InteractionManager, StyleSheet } = React;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  banner: {
    overflow: 'hidden',
    //marginBottom: 10,
    backgroundColor: '#FFF'
  },
});

//const dataSource = new ViewPager.DataSource({
//  pageHasChanged: (p1, p2) => p1.id !== p2.id,
//});

class Banner extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      //dataSource: dataSource.cloneWithPages([]),
    };
  }
  //use view_pager start
  //render() {
  //  return (
  //    <View style={this.props.style}>
  //      {this._renderViewPager()}
  //    </View>
  //  );
  //}
  //
  //_renderPage(data, pageID) {
  //  return (
  //    <TouchableOpacity onPress={Actions.commodityDetail}>
  //      <Image
  //        source={data.url}
  //        style={{width: deviceWidth, height:140, resizeMode: Image.resizeMode.cover}}/>
  //    </TouchableOpacity>
  //  );
  //}
  //
  //
  //_renderViewPager() {
  //
  //  return (
  //    <ViewPager
  //      dataSource={this.state.dataSource}
  //      renderPage={this._renderPage.bind(this)}
  //      isLoop={this.state.isLoop}
  //      autoPlay={false}/>
  //  );
  //}
  //use view_pager end

  //use swiper start
  render() {
    return (
      <View style={this.props.style}>
        <Swiper style={styles.banner} showsButtons={false} height={this.props.height}
                dot={<View style={{backgroundColor:'gray', width: 20, height: 3,borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                activeDot={<View style={{backgroundColor: '#FFF', width: 20, height: 3, borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                paginationStyle={{bottom: 0 }}
        >
          {this.renderHot(this.props.source)}
        </Swiper>
      </View>
    );
  }

  renderHot(source) {
    return source.map((item) => {
      return (
        <TouchableOpacity key={item.id} onPress={() => Actions.productDetail({data:`来自banner${item.id}`, url: item.url})}>
          <Image
            source={item.uri}
            style={{width: deviceWidth, height:this.props.height, resizeMode: Image.resizeMode.cover}}/>
        </TouchableOpacity>
      );
    });
  }
  //use swiper end
}

export default Banner;
