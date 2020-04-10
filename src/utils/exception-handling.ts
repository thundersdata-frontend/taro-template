/*
 * @文件描述: 异常处理
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-28 11:42:13
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-02 12:34:08
 */
import Taro from '@tarojs/taro';
import { loginRedirect } from './taro-request';

/** 未登录的重定向操作 */
export const handleRedirect = (loginText?: string) => {
  Taro.showToast({ title: loginText || '请先登录!', icon: 'none' });
  setTimeout(() => {
    Taro.switchTab({
      url: '/pages/profile/index',
    });
  }, 1000);
};

/**
 * 判断是否登录
 * @param needRedirect 是否需要跳转登录
 */
export const checkIsLogin = () => {
  const token = Taro.getStorageSync('access_token');
  return !!token;
};

/**
 * 统一处理捕获的异常信息
 * @param error
 * @param message
 */
export const catchError = (error: object, message?: string) => {
  console.error(error);
  const errorMessage = message || error['message'];
  if (loginRedirect(error)) {
    errorMessage && Taro.showToast({ title: errorMessage, icon: 'none' });
  }
};

/**
 * 统一封装try catch
 * @param func
 * @param params
 */
export interface TryCatchParams {
  errorMessage?: string;
}
export const tryCatch = async (func: Function, params?: TryCatchParams) => {
  const { errorMessage = '' } = params || {};
  try {
    return await func();
  } catch (error) {
    catchError(error, errorMessage);
    return error;
  }
};
