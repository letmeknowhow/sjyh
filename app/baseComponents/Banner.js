/**
 *  Class: Banner
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 轮播图
 */
import React from 'react-native';
import ViewPager from 'react-native-viewpager';
var Actions = require('react-native-router-flux').Actions;
const { Component, Dimensions, View, Image, TouchableOpacity, InteractionManager } = React;

const deviceWidth = Dimensions.get('window').width;

const dataSource = new ViewPager.DataSource({
  pageHasChanged: (p1, p2) => p1.id !== p2.id,
});

class Banner extends Component {

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      dataSource: dataSource.cloneWithPages([]),
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      if(this.props.source && this.props.source.length > 0) {
        this.setState({
          dataSource: dataSource.cloneWithPages(this.props.source),
          isLoop: this.props.source.length > 1
        });
      }
    });
  }

  componentWillReceiveProps(next) {
    if(next.source && next.source.length > 0) {
      this.setState({
        dataSource: dataSource.cloneWithPages(next.source),
        isLoop: next.source.length > 1
      });
    }
  }

  _renderPage(data, pageID) {
    return (
      <TouchableOpacity onPress={Actions.commodityDetail}>
        <Image
          source={data.url}
          style={{width: deviceWidth, height:140, resizeMode: Image.resizeMode.cover}}/>
      </TouchableOpacity>
    );
  }


  _renderViewPager() {

    return (
      <ViewPager
        dataSource={this.state.dataSource}
        renderPage={this._renderPage.bind(this)}
        isLoop={this.state.isLoop}
        autoPlay={true}/>
    );

  }

// 渲染
  render() {
    return (
      <View style={this.props.style}>
        {this._renderViewPager()}
      </View>
    );
  }


}

export default Banner;
