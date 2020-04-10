/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-03-30 16:53:45
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-03-30 17:40:18
 */
import Taro from '@tarojs/taro';

// 判断使用的手机是android还是ios
export const isAndroidDevice = () => {
  const result = Taro.getSystemInfoSync();
  return result.platform !== 'ios';
};
