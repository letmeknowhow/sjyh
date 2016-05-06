/**
 * Created by gaoletian on 15/11/25.
 */

import React from 'react-native';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
const { Component,View, Navigator, Text, StyleSheet, Platform, Image, Alert, BackAndroid } = React;
import CodePush from 'react-native-code-push';
import Modal from '../baseComponents/ModalBox';
const Actions = require('react-native-router-flux').Actions;

//import LoadSpinner from '../components/LoadSpinner';
/** 主tab 四页*/
import Home from '../components/home/Home';
import Order from '../components/order/Container';
import Favourite from '../components/favours/Container';
import Mine from '../components/mine/Container';

//销售项目
import ProductDetail from '../components/product/ProductDetail';
import ProductList from '../components/product/ProductList';

//订单
import OrderDetail from '../components/order/Detail';

//收藏
import FavoursDetail from '../components/favours/Detail';

//我的
import MyMessage from '../components/mine/MyMessage';
import CommonUse from '../components/mine/CommonUse';
import AboutUs from '../components/mine/AboutUs';

//账户总览
import AccountSummary from '../components/AccountSummary';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    marginBottom: 0,
  }
});
const TAB_TITLE_HOME = '首页';
const TAB_TITLE_ORDER = '手机银行';
const TAB_TITLE_FAVOURS = '金融助手';
const TAB_TITLE_MINE = '更多服务';

if (Platform.OS === 'android') {
  BackAndroid.addEventListener('hardwareBackPress', () => {
    if (!Actions.pop()) {
      Alert.alert('提示', '确定要退出应用吗?',
        [
          {text: '取消'},
          {text: '退出', onPress: () => BackAndroid.exitApp()}
        ]
      );
    }
    return true; // 返回true,不退出程序
  });
}

class TabIcon extends React.Component {

  render(){
    let uri;
    switch(this.props.title) {
      case TAB_TITLE_HOME:
        uri = require('../../assets/icons/Home.png');
        break;
      case TAB_TITLE_ORDER:
        uri = require('../../assets/icons/Order.png');
        break;
      case TAB_TITLE_FAVOURS:
        uri = require('../../assets/icons/Favours.png');
        break;
      default:
        uri = require('../../assets/icons/Mine.png');
    }
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={uri} style={{ tintColor: this.props.selected ? 'red' : null}} />
        <Text style={{color: this.props.selected ? 'red' :'black', fontSize: 12, marginTop: 3}}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class Application extends Component {

  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      progress: false,
    };
  }

  componentWillMount() {
    let self = this;
    CodePush.sync(
      {
        updateDialog: {
          title: '升级提醒',
          optionalUpdateMessage: '有一个可用的更新 是否需要安装?',
          optionalInstallButtonLabel: '马上更新',
          optionalIgnoreButtonLabel: '暂不更新'
        },
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      (syncStatus) => {
        switch(syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            self.setState({
              syncMessage: '正在检查更新.'
            });
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            self.setState({
              syncMessage: '正在下载.'
            });
            this.refs.downloadBox.open();
            break;
          case CodePush.SyncStatus.AWAITING_USER_ACTION:
            self.setState({
              syncMessage: 'Awaiting user action.'
            });
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            self.setState({
              syncMessage: '正在安装.'
            });
            this.refs.downloadBox.close()
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
            self.setState({
              syncMessage: '更新版本号到最新',
              progress: false
            });
            break;
          case CodePush.SyncStatus.UPDATE_IGNORED:
            self.setState({
              syncMessage: 'Update cancelled by user.',
              progress: false
            });
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            self.setState({
              syncMessage: '更新已经安装,下次重启后应用更新内容',
              progress: false
            });
            break;
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            self.setState({
              syncMessage: '一个未知错误',
              progress: false
            });
            break;
        }
      },
      (progress) => {
        self.setState({
          progress: progress
        });
      }
    );
  }

  render() {

    return (
      <View style={{flex: 1}} >
        <Router hideNavBar={true}>
          <Schema name="tab" type="switch" icon={TabIcon} />
          <Route name="productDetail" component={ProductDetail} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="productList" component={ProductList} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="orderDetail" component={OrderDetail} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="favoursDetail" component={FavoursDetail} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="myMessage" component={MyMessage} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="commonUse" component={CommonUse} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="aboutUs" component={AboutUs} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="accountSummary" component={AccountSummary} sceneConfig={Navigator.SceneConfigs.FloatFromRight} />
          <Route name="tabBar" initial={true}>
            <Router footer={TabBar} showNavigationBar={false}>
              <Route name="home" schema="tab" initial={true} component={Home} title={TAB_TITLE_HOME} hideNavBar={true}/>
              <Route name="order" schema="tab" component={Order} title={TAB_TITLE_ORDER} hideNavBar={true} />
              <Route name="favours" schema="tab" component={Favourite} title={TAB_TITLE_FAVOURS} hideNavBar={true}/>
              <Route name="mine" schema="tab" component={Mine} title={TAB_TITLE_MINE} hideNavBar={true}/>
            </Router>
          </Route>
        </Router>
        <Modal style={[styles.modal]} swipeToClose={false} position={"center"} ref={"downloadBox"}>
          <View>
            <Text>{this.state.syncMessage}</Text>
            {this.state.progress && (
              <Text>{this.state.progress.receivedBytes} / {this.state.progress.totalBytes}</Text>)}
          </View>
        </Modal>
      </View>
    );
  }
}
