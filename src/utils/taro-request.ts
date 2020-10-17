/* eslint-disable complexity */
/*
 * @文件描述: 基于taro request的封装
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-19 10:40:13
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-07 15:35:08
 */
import Taro from '@tarojs/taro';
import { CustomWindow } from '@/interfaces/common';
import { handleRedirect } from './exception-handling';

export interface AjaxResponse<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}

/**
 * 暂时没有用
 * @param response
 */
export function handleSuccess(response: Taro.request.SuccessCallbackResult) {
  return response.data;
}

/**
 * 异常处理函数
 * @param error
 */
export function handleError(response: Taro.General.CallbackResult) {
  const { errMsg } = response;
  return Promise.reject({
    code: 50000,
    success: false,
    message: errMsg,
  });
}

/**
 * 未登录重新跳转
 * @param error
 */
export const loginRedirect = (error: object) => {
  const needLoginCodeList = [60001, 60002, 60003];
  const reLoginCode = 60003;
  const loginText = needLoginCodeList.includes(error['code'])
    ? error['code'] !== reLoginCode
      ? '请先登录!'
      : '登录信息过期，请重新登录!'
    : '';
  if (!!loginText) {
    handleRedirect(loginText);
    return false;
  }
  return true;
};

/**
 * url拼接参数
 * @param url
 * @param params
 */
const addQueryUrl = (url: string, params?: object) => {
  if (!params) {
    return url;
  }
  const addStr = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  if (url.split('?').length > 1) {
    return `${url}&${addStr}`;
  } else {
    return `${url}?${addStr}`;
  }
};

const generalMethods: {
  key: string;
  method?:
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT';
  'Content-Type'?: string;
}[] = [
  {
    key: 'get',
    method: 'GET',
  },
  {
    key: 'put',
    method: 'PUT',
  },
  {
    key: 'delete',
    method: 'DELETE',
  },
  {
    key: 'postForm',
    method: 'POST',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  {
    key: 'postJSON',
    method: 'POST',
    'Content-Type': 'application/json',
  },
  {
    key: 'postFile',
    method: 'POST',
    'Content-Type': 'multipart/form-data',
  },
  {
    key: 'authGet',
    method: 'GET',
  },
  {
    key: 'authForm',
    method: 'POST',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
];
const requestConfig = {};
generalMethods.forEach(item => {
  const { key, method } = item;
  if (method === 'POST') {
    // post url携带参数
    requestConfig[key] = async function <T>(
      url: string,
      data?: object,
      params?: object,
      needLogin = true,
    ) {
      const { getToken, withCredentials } =
        (needLogin && ((global as unknown) as CustomWindow).requestConfig) ||
        {};
      if (needLogin && getToken) {
        const token = await getToken();
        const header = {
          'access-token': token,
        };
        if (item['Content-Type']) {
          header['Content-Type'] = item['Content-Type'];
        }
        return Taro.request<T>({
          url: addQueryUrl(url, params),
          method,
          data,
          header,
          credentials: 'same-origin',
          success: handleSuccess,
          fail: handleError,
        });
      }
      return Taro.request<T>({
        url: addQueryUrl(url, params),
        method,
        data,
        credentials: withCredentials ? 'include' : 'same-origin',
        success: handleSuccess,
        fail: handleError,
      });
    };
  } else {
    requestConfig[key] = async function <T>(
      url: string,
      data?: object,
      needLogin = true,
    ) {
      const { getToken, withCredentials } =
        (needLogin && ((global as unknown) as CustomWindow).requestConfig) ||
        {};
      if (needLogin && getToken) {
        const token = await getToken();
        const header = {
          'access-token': token,
        };
        if (item['Content-Type']) {
          header['Content-Type'] = item['Content-Type'];
        }
        return Taro.request<T>({
          url,
          method,
          data,
          header,
          credentials: 'same-origin',
          success: handleSuccess,
          fail: handleError,
        });
      }
      return Taro.request<T>({
        url,
        method,
        data,
        credentials: withCredentials ? 'include' : 'same-origin',
        success: handleSuccess,
        fail: handleError,
      });
    };
  }
});

export default requestConfig as HttpProps;

export interface HttpProps {
  get: <T>(url: string, option?: object) => Promise<Taro.RequestTask<T>>;
  put: <T>(url: string, option?: object) => Promise<Taro.RequestTask<T>>;
  delete: <T>(url: string, option?: object) => Promise<Taro.RequestTask<T>>;
  postForm: <T>(
    url: string,
    data?: object,
    params?: object,
  ) => Promise<Taro.RequestTask<T>>;
  postJSON: <T>(
    url: string,
    data?: object,
    params?: object,
  ) => Promise<Taro.RequestTask<T>>;
  authGet: <T>(url: string, option?: object) => Promise<Taro.RequestTask<T>>;
  authForm: <T>(url: string, data?: object) => Promise<Taro.RequestTask<T>>;
}
