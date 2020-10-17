/*
 * @文件描述: 全局抽屉
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-12 17:28:55
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:39:59
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { AtFloatLayout } from 'taro-ui';
import classnames from 'classnames';
import { isAndroidDevice } from '@/utils/device';

interface DrawerProps {
  onClose?: () => void;
  style?: React.CSSProperties;
  visible?: boolean;
  className?: string;
  hasMarginBottom?: boolean;
}

const Drawer: Taro.FC<DrawerProps> = ({
  onClose,
  style = {},
  visible = false,
  hasMarginBottom,
  className,
  children,
}) => {
  const drawerBottomClass = hasMarginBottom
    ? isAndroidDevice()
      ? 'bottom-drawer'
      : 'ios-bottom-drawer'
    : '';
  return (
    <AtFloatLayout
      className={classnames('drawer', drawerBottomClass, className)}
      isOpened={visible}
      onClose={onClose}
      scrollY={false}
      scrollX={false}
      customStyle={style}
    >
      {children}
    </AtFloatLayout>
  );
};

export default Drawer;
