/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-17 11:57:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-26 09:59:19
 */
import Taro, { Component, Config } from '@tarojs/taro';
import lodashFix from '@/utils/lodash-fix.js';
import compatibility from '@/utils/compatibility';
import { CustomWindow, GlobalData } from '@/interfaces/common';
import 'taro-ui/dist/style/components/badge.scss';
import 'taro-ui/dist/style/components/button.scss';
import 'taro-ui/dist/style/components/search-bar.scss';
import 'taro-ui/dist/style/components/loading.scss';
import 'taro-ui/dist/style/components/float-layout.scss';
import 'taro-ui/dist/style/components/avatar.scss';
import Index from './pages/home/index';
import './app.less';
import './assets/iconfont/iconfont.css';

// 环境兼容
compatibility();
// 解决无法访问基本方法问题
lodashFix();
((global as unknown) as CustomWindow).requestConfig = {
  withCredentials: false,
  getToken() {
    const accessToken = Taro.getStorageSync('access_token');
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

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ['pages/home/index', 'pages/profile/index'],
    tabBar: {
      custom: true, // 使用custom-tab-bar
      color: 'rgba(0, 0, 0, 0.6)',
      selectedColor: 'rgba(0, 162, 0, 1)',
      backgroundColor: '#fff',
      borderStyle: 'white',
      // 这些配置无法省略
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './assets/tabBarImgs/icn_tab_home_normal.png',
          selectedIconPath: './assets/tabBarImgs/icn_tab_home_focus.png',
        },
        {
          pagePath: 'pages/profile/index',
          text: '我的',
          iconPath: './assets/tabBarImgs/icn_tab_my_normal.png',
          selectedIconPath: './assets/tabBarImgs/icn_tab_my_focus.png',
        },
      ],
    },
    // 分包
    subPackages: [
      {
        root: 'packageA',
        pages: ['pages/detail/index'],
      },
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    permission: {
      'scope.userLocation': {
        desc: '快捷定位，生鲜果蔬为你配送到家', // 高速公路行驶持续后台定位
      },
    },
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
