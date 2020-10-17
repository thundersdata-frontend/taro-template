/*
 * @文件描述: iconfont
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-18 14:33:51
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:40:14
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { Text } from '@tarojs/components';
import { ITouchEvent } from '@tarojs/components/types/common';
import classnames from 'classnames';

export interface IconfontProps {
  name: string;
  style?: React.CSSProperties;
  onClick?: (e: ITouchEvent) => void;
}

const Iconfont: Taro.FC<IconfontProps> = props => {
  const { name, style = {}, onClick } = props;
  return (
    <Text
      onClick={e => onClick && onClick(e)}
      style={style}
      className={classnames('iconfont', name, 'my-class', props['my-class'])}
    />
  );
};

// 引入全局的class 否则组件内部样式会不生效
Iconfont.options = {
  addGlobalClass: true,
};
Iconfont.externalClasses = ['my-class'];

export default Iconfont;
