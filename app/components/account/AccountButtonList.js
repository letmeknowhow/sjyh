/**
 *  Class: AccountButtonList
 *  Author: Niu Xiaoyu
 *  Date: 16/4/3.
 *  Description:
 */
import React from 'react-native';

const { Component, View, Text, StyleSheet, TouchableOpacity } = React;

const styles = StyleSheet.create({
  //page: {margin: 15},
  button: {
    height: 30,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#E7E7E7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 15
  },
  font: {
    fontSize: 12
  },
});
export default class AccountButtonList extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={[{height: this.props.buttons.length * 30}, this.props.style]}>
        {this.renderButton(this.props.buttons, this.props.action)}
      </View>
    );
  }

  renderButton(buttons, action) {
    let i = 0;
    return buttons.map((button) => {
      if(button.clickable) {
        return (
          <TouchableOpacity key={button.id} style={styles.button} >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.font}>{button.text}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.font,{color: button.amountColor}]}>{this.formatMoney(button.amount)}</Text>
              <Text>{'  >'}</Text>
            </View>
          </TouchableOpacity>
        );
      } else {
        return (
          <View key={button.id} style={styles.button}
                            onPress={()=> {action && action({data: button.text})}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.font}>{button.text}</Text>
            </View>
            <Text style={[styles.font,{color: button.amountColor}]}>{this.formatMoney(button.amount)}</Text>
          </View>
        );
      }
    });
  }

  formatMoney(money) {
    if (/[^0-9\.]/.test(money)) return money;
    money = money.replace(/^(\d*)$/, "$1.");
    money = (money + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    money = money.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(money)) {
      money = money.replace(re, "$1,$2");
    }
    money = money.replace(/,(\d\d)$/, ".$1");
    return '' + money.replace(/^\./, "0.");
  }
}