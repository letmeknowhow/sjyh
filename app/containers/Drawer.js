/**
 *  Class: Drawer
 *  Author: Niu Xiaoyu
 *  Date: 16/5/31.
 *  Description:
 */
import React from 'react-native';

const { Component} = React;
import SideMenu from 'react-native-side-menu';
import {DefaultRenderer} from 'react-native-router-flux';
import MenuContent from './ConfigMenu';

export default class Drawer extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isOpen: false
    };
  }

  render() {
    const children = this.props.navigationState.children;
    return (
      <SideMenu
        menu={<MenuContent />}
        isOpen={this.state.isOpen}
        menuPosition="right"
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </SideMenu>
    );
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }
}