/*
 * @文件描述: 用于包装常用flex布局的容器
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-09 10:33:58
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:40:07
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { ITouchEvent } from '@tarojs/components/types/common';
import styles from './index.module.less';

export interface FlexContainerProps {
  type?: 'flexBetween' | 'flexAround' | 'flexEvenly' | 'flexCenter';
  style?: React.CSSProperties;
  verticalType?: 'center' | 'flexStart' | 'flexEnd';
  onClick?: (e: ITouchEvent) => void;
}

const FlexContainer: Taro.FC<FlexContainerProps> = props => {
  const {
    type = 'flexBetween',
    children,
    style = {},
    verticalType = 'center',
    onClick,
  } = props;
  return (
    <View
      onClick={e => onClick && onClick(e)}
      style={{ display: 'flex', ...style }}
      className={classnames(
        'my-class',
        props['my-class'],
        styles[type],
        styles[`${verticalType}Align`],
      )}
    >
      {children}
    </View>
  );
};

FlexContainer.externalClasses = ['my-class'];

export default FlexContainer;
