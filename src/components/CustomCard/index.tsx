/*
 * @文件描述: 自定义卡片
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-05 10:51:42
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:39:53
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.less';
import Iconfont from '../Iconfont';

export interface CardExtraProps {
  text?: string;
  icon?: string;
  onClick?: () => void;
}

export interface CustomCardProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
  extra?: CardExtraProps;
  headerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}

const CustomCard: Taro.FC<CustomCardProps> = props => {
  const {
    title,
    subtitle,
    extra = {},
    children,
    style = {},
    headerStyle = {},
  } = props;
  return (
    <View
      style={style}
      className={classnames('my-class', props['my-class'], styles.card)}
    >
      <View style={headerStyle} className={styles.header}>
        <View>
          <View className={styles.title}>{title}</View>
          {subtitle && <View className={styles.subtitle}>{subtitle}</View>}
        </View>
        <View onClick={extra.onClick} className={styles.extra}>
          {extra.text && <Text>{extra.text}</Text>}
          {extra.icon && (
            <Iconfont style={{ fontSize: '12px' }} name={extra.icon} />
          )}
        </View>
      </View>
      <View className={styles.content}>{children}</View>
    </View>
  );
};

CustomCard.externalClasses = ['my-class'];

export default CustomCard;
