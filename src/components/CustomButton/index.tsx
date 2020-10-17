/*
 * @文件描述: 自定义按钮
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-06 11:23:46
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:35:03
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import classnames from 'classnames';
import { ITouchEvent } from '@tarojs/components/types/common';
import { SizeType } from '@/interfaces/common';
import { getClassArrayByComponentName } from '@/utils/array';

export type ButtonType =
  | 'primary'
  | 'dashed'
  | 'link'
  | 'solid'
  | 'disable'
  | 'graySolid';

export interface CustomButtonProps {
  onClick?: (e: ITouchEvent) => void;
  style?: React.CSSProperties;
  type?: ButtonType;
  disabled?: boolean;
  size?: SizeType;
  className?: string;
}

const CustomButton: Taro.FC<CustomButtonProps> = ({
  onClick,
  children,
  style = {},
  type = 'primary',
  disabled = false,
  size = 'default',
  className = '',
}) => {
  return (
    <AtButton
      customStyle={style}
      disabled={disabled}
      onClick={onClick}
      className={classnames(
        ...getClassArrayByComponentName('customButton', [
          'btn',
          type,
          `${size}Size`,
        ]),
        className,
      )}
    >
      {children}
    </AtButton>
  );
};

CustomButton.options = {
  addGlobalClass: true,
};

export default CustomButton;
