import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class BannerStore {
  @observable bannerSource = [];

  constructor(){
    //reaction(()=>this.counter, this.increaseTotal);
  }

  getSource() {
    const MockUrl = '../../../assets/HelloWorld.html';
    this.bannerSource = [
      {id: '1', uri: require('../../../assets/banner/1.png'), url: MockUrl},
      {id: '2', uri: require('../../../assets/banner/2.png'), url: MockUrl},
      {id: '3', uri: require('../../../assets/banner/3.png'), url: MockUrl},
      {id: '4', uri: require('../../../assets/banner/4.png'), url: MockUrl}
    ];
  }
}

export default  new BannerStore();
