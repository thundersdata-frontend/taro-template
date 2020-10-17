/*
 * @文件描述: 徽标组件
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-03-10 17:30:39
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 16:42:08
 */
import React from 'react';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { SizeType } from '@/interfaces/common';
import { AtBadge } from 'taro-ui';

// 徽标最大溢出数字
const MAX_OVERFIOW_NUMBER = 99;

// 数字为0隐藏
const ZERO_NUMBER = 0;
interface BadgeProps {
  /** clasName改变样式 */
  className?: string;
  /** 徽标字体大小 */
  size?: SizeType;
  /** 不展示数字，只有一个小红点 */
  dot?: boolean;
  /** 最大数量 */
  maxValue?: number;
  /** 展示的数字或文字 */
  value?: number | string;
  /** style */
  style?: React.CSSProperties;
}

const Badge: Taro.FC<BadgeProps> = props => {
  const {
    dot,
    maxValue = MAX_OVERFIOW_NUMBER,
    value,
    size = 'default',
    children,
    className,
    style = {},
  } = props;
  const displayNumber = value === ZERO_NUMBER ? '' : value;
  return (
    <AtBadge
      className={classnames(
        'badge',
        `${size}-badge`,
        className,
        'my-class',
        props['my-class'],
      )}
      value={displayNumber}
      dot={dot}
      maxValue={maxValue}
      customStyle={style}
    >
      {children}
    </AtBadge>
  );
};

Badge.options = {
  addGlobalClass: true,
};

Badge.externalClasses = ['my-class'];

export default Badge;
