/*
 * @文件描述: refresh hook
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-03-27 13:38:23
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 11:38:04
 */
import Taro from '@tarojs/taro';
import { useState } from 'react';

const useRefresh: () => [
  boolean,
  (refresh: boolean) => void,
  (functionList: Function[]) => void,
] = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  /**
   * @功能描述: 执行刷新回调事件(多个异步函数时使用)
   * @参数: 异步函数列表
   * @返回值:
   */
  const handleCallBack = (functionList: Function[]) => {
    const promiseList = functionList.map(func => {
      return (() =>
        new Promise(async resolve => {
          await func();
          resolve(true);
        }))();
    });
    return Promise.all(promiseList).catch(error => {
      Taro.showToast({
        title: error.message,
        icon: 'none',
      });
    });
  };

  return [refreshing, setRefreshing, handleCallBack];
};

export default useRefresh;
