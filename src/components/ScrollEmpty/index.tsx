/*
 * @文件描述: 滚动到底的显示
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-19 10:43:49
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:40:43
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.less';

interface ScrollEmptyProps {
  text?: string;
  style?: React.CSSProperties;
}

const ScrollEmpty: Taro.FC<ScrollEmptyProps> = props => {
  const { text = '到底了，再看看别的分类吧', style = {} } = props;
  return (
    <View
      style={style}
      className={classnames('my-class', props['my-class'], styles.container)}
    >
      <Text>{text}</Text>
    </View>
  );
};

ScrollEmpty.externalClasses = ['my-class'];

export default ScrollEmpty;
