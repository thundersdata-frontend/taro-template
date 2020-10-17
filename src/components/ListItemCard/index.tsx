/*
 * @文件描述: 用于显示商品参数之类的列表类卡片容器
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-10 11:40:22
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:39:24
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { ITouchEvent } from '@tarojs/components/types/common';
import styles from './index.module.less';
import Iconfont from '../Iconfont';

export interface ListItemCardProps {
  /** listItem左边文字 */
  title?: string;
  /** title样式 */
  titleStyle?: React.CSSProperties;
  /** 组件样式 */
  style?: React.CSSProperties;
  /** 是否有底部线 */
  borderBottom?: boolean;
  /** listItem右边文字 */
  extraText?: string;
  /** listItem右边文字样式 */
  extraTextStyle?: React.CSSProperties;
  /** 右边的iconName(iconfont) */
  extraIcon?: string;
  /** extraIcon的样式 */
  extraIconStyle?: React.CSSProperties;
  /** 右侧向下箭头 */
  arrow?: 'right' | 'left' | 'down';
  /** 点击事件 */
  onClick?: (e: ITouchEvent) => void;
}

// 箭头方向icon名
const ARROW_ICON_NAME = Object.freeze({
  left: 'icon_nav_back',
  right: 'icon_detail_next',
  down: 'icon_nav_down',
});

const ListItemCard: Taro.FC<ListItemCardProps> = props => {
  const {
    title,
    titleStyle = {},
    children,
    style = {},
    borderBottom = false,
    extraText,
    extraTextStyle = {},
    extraIcon,
    extraIconStyle = {},
    arrow,
    onClick,
  } = props;
  return (
    <View
      onClick={e => onClick && onClick(e)}
      style={style}
      className={classnames(
        'my-class',
        props['my-class'],
        styles.card,
        borderBottom ? styles.borderBottom : '',
      )}
    >
      <View className={styles.title} style={titleStyle}>
        {title}
      </View>
      {/* 如果没有传入title 应该取消左边距 */}
      <View style={{ marginLeft: !title ? 0 : '' }} className={styles.content}>
        {children}
      </View>
      <View className={styles.extraWrap}>
        {extraText && (
          <View className={styles.extraText} style={extraTextStyle}>
            {extraText}
          </View>
        )}
        {extraIcon && <Iconfont name={extraIcon} style={extraIconStyle} />}
        {arrow && (
          <Iconfont name={ARROW_ICON_NAME[arrow]} my-class={styles.arrowIcon} />
        )}
      </View>
    </View>
  );
};

ListItemCard.externalClasses = ['my-class'];

export default ListItemCard;
