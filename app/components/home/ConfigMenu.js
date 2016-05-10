/**
 *  Class: ConfigMenu
 *  Author: Niu Xiaoyu
 *  Date: 16/2/16.
 *  Description:
 */
const MockData_1 = [
  {id: 0, uri: require('../../../assets/icons/mine/xxzx.png'), text: '登录密码修改'},
  {id: 1, uri: require('../../../assets/icons/mine/cydz.png'), text: '限额设置'},
  {id: 2, uri: require('../../../assets/icons/mine/cylk.png'), text: '用户名设置'}
];
const MockData_2 = [
  {id: 0, uri: require('../../../assets/icons/mine/gywm.png'), text: '账号保护'},
  {id: 1, uri: require('../../../assets/icons/mine/qb.png'), text: '预留信息设置'},
  {id: 2, uri: require('../../../assets/icons/mine/sz.png'), text: '交易密码修改'}
];
const MockData_3 = [
  {id: 0, uri: require('../../../assets/icons/mine/qb.png'), text: '手势密码'},
  {id: 1, uri: require('../../../assets/icons/mine/sz.png'), text: '短信提醒管理'},
  {id: 2, uri: require('../../../assets/icons/mine/sz.png'), text: '检查更新'},
];
import React from 'react-native';

const { Component, View, Text, StyleSheet, Dimensions, ScrollView, Image } = React;

import ButtonList from '../ButtonList';
import ModalBox from '../../baseComponents/ModalBox';
const Actions = require('react-native-router-flux').Actions;

import CodePush from 'react-native-code-push';

const window = Dimensions.get('window');
const myPortrait = require('../../../assets/icons/config.png');
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#CCC9C9',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#FFF',
    width: 210
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  name: {
    fontSize: 16
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    backgroundColor: '#fff'
  }
});

export default class ConfigMenu extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        progress: false,
      };
    }
  // 渲染
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={myPortrait}/>
          <Text style={styles.name}>设置</Text>
        </View>
        <ButtonList style={{width: 210}} buttonType={{height: 30, backgroundColor: 'transparent'}} buttons={MockData_1} />
        <ButtonList style={{width: 210, marginTop: 10}} buttonType={{height: 30, backgroundColor: 'transparent'}} buttons={MockData_2} />
        <ButtonList style={{width: 210, marginTop: 10}}
                    buttonType={{height: 30, backgroundColor: 'transparent'}}
                    buttons={MockData_3} actions={this.getActions3()}
        />
        <ModalBox style={[styles.modal]} swipeToClose={false} position={"center"} ref={"downloadBox"}>
          <View style={styles.message}>
            <Text>{this.state.syncMessage}</Text>
            {this.state.progress && (
              <Text>{this.state.progress.receivedBytes} / {this.state.progress.totalBytes}</Text>)}
          </View>
          <View style={{width: window.width / 3, backgroundColor: 'transparent'}}>

          </View>
        </ModalBox>
      </View>
    );
  }

  getActions3() {
    return [
      null,
      null,
      this.check4Update.bind(this)
    ];
  }

  check4Update() {
    let self = this;
    CodePush.checkForUpdate()
      .then((update) => {
        if (!update) {
          console.log("The app is up to date!");
          self.setState({
            syncMessage: '已经是最新版本.'
          });
          this.refs.downloadBox.open();
        } else {
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
                  this.refs.downloadBox.close();
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
      });


  }
}
