/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-03-24 13:30:39
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-03-24 13:44:13
 */

/**
 * @功能描述: 转换手机号为私密格式
 * @参数: @param phone
 * @返回值: 私密格式的手机号
 */
export const transformSecretPhone = (phone?: string) => {
  return phone ? `${phone.substring(0, 3)}****${phone.substring(7)}` : '';
};
