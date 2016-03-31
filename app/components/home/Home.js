/**
 *  Class: Home
 *  Author: Niu Xiaoyu
 *  Date: 16/3/31.
 *  Description: 首页
 */
import React from 'react-native';

import Banner from '../../baseComponents/Banner';

const { Component, View, StyleSheet, Platform, Text } = React;

const mockData_banner = [
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

const mockData_commoditySummary = [
  {
    id: '1',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '张三',
    publish_time: '2016-1-2',
    price: '410',
    message: 4,
    zan: 5,
    summary: '酷冷至尊（CoolerMaster） 烈焰枪 红轴 游戏机械键盘 台湾制造 优良血统 紧凑布局;酷冷至尊（CoolerMaster） 烈焰枪 红轴 游戏机械键盘 台湾制造 优良血统 紧凑布局'
  },
  {
    id: '2',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '李四',
    publish_time: '2015-11-2',
    price: '900',
    message: 2,
    zan: 8,
    summary: '苏泊尔（SUPOR）32cm二代火红点不粘无油烟炒锅炒菜锅明火电磁炉通'
  },
  {
    id: '3',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '王五',
    publish_time: '2016-1-5',
    price: '50',
    message: 1,
    zan: 1,
    summary: '双立人锅具刀具12件套装 铸铁炖锅 煎锅蒸锅炊具 不锈钢色 锅具套装'
  },
  {
    id: '4',
    portrait: require('../../../assets/portrait.jpg'),
    thumbs: [
      require('../../../assets/sampleImage/img1.jpg'),
      require('../../../assets/sampleImage/img2.jpg'),
      require('../../../assets/sampleImage/img3.jpg'),
      require('../../../assets/sampleImage/img4.jpg')
    ],
    publisher: '赵六',
    publish_time: '2016-2-2',
    price: '110',
    message: 8,
    zan: 8,
    summary: '中兴 Blade A1(C880A) 16G 灵动白 全网通'
  }
];

const styles = StyleSheet.create(
  {
    page: {
      flex: 1,
      backgroundColor: '#f3f2f3'
    },
    header: {
      backgroundColor: '#ffda44'
    }
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
        <View style={styles.page}>
          <Banner
            style={{height: 140, overflow: 'hidden', marginBottom: 10}}
            source={mockData_banner}
            {...this.props}
          />
          <View style={{flex: 1, marginHorizontal: 3}}>
            <Text>首页</Text>
          </View>
        </View>
    );
  }
}