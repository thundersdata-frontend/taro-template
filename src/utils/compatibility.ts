/*
 * @文件描述: 环境兼容
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-04-07 14:16:51
 * @LastEditors: 廖军
 * @LastEditTime: 2020-04-07 14:19:26
 */
import Taro from '@tarojs/taro';

export default () => {
  // 只有微信小程序环境才有 useScope
  if (!Taro.useScope) {
    Taro.useScope = () => null;
  }
};
