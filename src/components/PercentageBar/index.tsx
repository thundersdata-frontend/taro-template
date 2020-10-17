/*
 * @文件描述: 进度条
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-06 09:35:01
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:40:22
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.less';

export interface PercentageBarProps {
  value: number;
  style?: React.CSSProperties;
}

const PercentageBar: Taro.FC<PercentageBarProps> = props => {
  const { value, style = {} } = props;
  return (
    <View
      style={style}
      className={classnames('my-class', props['my-class'], styles.bar)}
    >
      <View
        style={{ width: `${value > 100 ? 100 : value}%` }}
        className={styles.percentage}
      />
    </View>
  );
};

PercentageBar.externalClasses = ['my-class'];

export default PercentageBar;
