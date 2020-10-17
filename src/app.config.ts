/*
 * @文件描述: 全局配置
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-10-16 13:39:42
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 16:33:22
 */

export default {
  pages: ['pages/home/index', 'pages/profile/index'],
  tabBar: {
    // custom: true, // 使用custom-tab-bar 在h5中无效
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
