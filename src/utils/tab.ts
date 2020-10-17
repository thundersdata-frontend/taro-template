/*
 * @文件描述: tabBar
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-10-17 17:39:06
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 17:44:56
 */

import Taro from '@tarojs/taro';

/**
 * 设置tabBar徽标
 * @param option
 */
export const setTabBarBadge = (option: Taro.setTabBarBadge.Option) => {
  // h5环境下需要触发tabBar的变化才能设置，如果遇到其他TabBar的操作存在问题也可以参考这种处理方式
  if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
    Taro.hideTabBar();
    Taro.setTabBarBadge(option);
    Taro.showTabBar();
  } else {
    Taro.setTabBarBadge(option);
  }
};
