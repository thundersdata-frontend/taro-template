/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-06 16:10:13
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 17:01:19
 */

/**
 * 获取用于对比的对象 用于Taro.memo场景
 * @param keys
 * @param obj
 */
export const getCompareObjectByKeys = (keys: string[], obj: object) => {
  const compareObj = {};
  Object.keys(keys).map(key => {
    compareObj[key] = obj[key];
  });
  return compareObj;
};

/**
 * 判断组件是否需要更新
 * @param keys
 * @param prev
 * @param next
 */
export const isComponentNeedUpdate = (
  keys: string[],
  prev: object,
  next: object,
) =>
  JSON.stringify(getCompareObjectByKeys(keys, prev)) !==
  JSON.stringify(getCompareObjectByKeys(keys, next));
