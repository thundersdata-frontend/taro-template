/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-17 11:57:17
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 16:18:30
 */
import { Component } from 'react';
import Taro from '@tarojs/taro';
import lodashFix from '@/utils/lodash-fix.js';
import { CustomWindow, GlobalData } from '@/interfaces/common';
import 'taro-ui/dist/style/components/badge.scss';
import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/search-bar.scss';
import 'taro-ui/dist/style/components/loading.scss';
import 'taro-ui/dist/style/components/float-layout.scss';
import 'taro-ui/dist/style/components/avatar.scss';
import './app.less';
import './assets/iconfont/iconfont.css';

// 解决无法访问基本方法问题
lodashFix();
((global as unknown) as CustomWindow).requestConfig = {
  withCredentials: false,
  getToken() {
    const accessToken: string = Taro.getStorageSync('access_token');
    return Promise.resolve(accessToken);
  },
};
((global as unknown) as CustomWindow).authConfig = {
  url: '',
  client_id: '',
  client_secret: '',
  password_min: 6,
  password_max: 20,
  company: 0,
};
((global as unknown) as GlobalData).globalData = { selectedIndex: 0 };

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
