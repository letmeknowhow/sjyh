import React from 'react-native';
//import AppContainer from './app/containers/index';
import Application from './app/containers/app';
const { AppRegistry, Platform, StatusBarIOS } = React;
//noinspection JSCheckFunctionSignatures
if (Platform.OS === 'ios') {
  StatusBarIOS.setStyle('default');
}
AppRegistry.registerComponent('Travel', () => Application);
