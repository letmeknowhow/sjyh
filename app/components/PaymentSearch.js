/**
 *  Class: PaymentSearch
 *  Author: Niu Xiaoyu
 *  Date: 16/5/9.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } = React;
import CommonHeader from './CommonHeader';
import Picker from 'react-native-picker';
const styles = StyleSheet.create({
  page: {
    flex: 1,
    //backgroundColor: '#f3f2f3',
    //paddingHorizontal: 5,
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    alignItems: 'center',
    //paddingHorizontal: 5,
    marginHorizontal: 5,
    //paddingVertical: 10,
    padding: 10
  },
  label: {
    width: 100
  },
  dataInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    //height: 50,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  searchButton: {
    backgroundColor: '#399CE8',
    height: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5
  }
});

const paymentType = ['水费', '燃气费'];
const agentWater = ['焦作水务'];
const agentGas = ['焦作中燃'];

export default class PaymentSearch extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      agentType: agentWater
    };
  }

  // 渲染
  render() {
    return (
      <View  style={[styles.page, {marginTop: Platform.OS === 'ios' ? 20 : 0}]}>
        <CommonHeader data={this.props.data} />
        <View style={[styles.container, {borderTopRightRadius: 5, borderTopLeftRadius: 5}]}>
          <Text style={styles.label}>缴费类型:</Text>
          <Picker
            style={{height: 300}}
            showDuration={300}
            showMask={true}
            pickerData={paymentType}
            selectedValue={'水费'}//default to be selected value
            onPickerDone={(pickedValue) => this.setState({agentType: pickedValue == '水费'? agentWater : agentGas})}//when confirm your choice
          />
        </View>
        <View style={[styles.container, {borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopWidth: 0}]}>
          <Text style={styles.label}>缴费类型:</Text>
          <Picker
            style={{height: 300}}
            showDuration={300}
            showMask={true}
            pickerData={this.state.agentType}
          />
        </View>
        <View style={[styles.container, {borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopWidth: 0}]}>
          <Text style={styles.label}>用户编号:</Text>
          <TextInput style={styles.dataInput} placeholder='请输入用户编号' />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#FFF'}}>查询</Text>
        </TouchableOpacity>
      </View>
    );
  }
}