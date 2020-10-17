/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-03-11 18:12:18
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-09 17:46:07
 */

/**
 * 获取处理后的全局样式
 * @param componentName
 * @param classNames
 */
export const getClassArrayByComponentName = (
  componentName: string,
  classNames: string[],
) => classNames.map(classStr => `${componentName}-${classStr}`);
