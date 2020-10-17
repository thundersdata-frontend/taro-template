/*
 * @文件描述: 搜索输入框
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-04-26 09:50:56
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:40:54
 */
import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { AtSearchBar } from 'taro-ui';
import classnames from 'classnames';

export interface SearchInputProps {
  value?: string;
  /** 点击确认搜索 */
  onSearch?: (value?: string) => void;
  /** 占位符 */
  placeholder?: string;
  /** 点击后调用函数 */
  onClick?: () => void;
  /** 点击取消调用函数 */
  onCancel?: () => void;
  /** 隐藏取消按钮 */
  hiddenCancel?: boolean;
  /** className */
  className?: string;
  /** style */
  style?: React.CSSProperties;
}

const SearchInput: Taro.FC<SearchInputProps> = ({
  value = '',
  placeholder,
  onClick,
  onCancel,
  hiddenCancel,
  className,
  style = {},
  onSearch = () => {},
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleCancel = () => {
    setCurrentValue('');
    onCancel && onCancel();
  };

  const handleConfirm = () => {
    setCurrentValue(value);
    onSearch && onSearch(currentValue);
  };

  return (
    <AtSearchBar
      className={classnames(
        'searchInput',
        `${hiddenCancel ? 'hidden-cancel-searchInput' : ''}`,
        className,
      )}
      actionName="取消"
      customStyle={style}
      value={currentValue}
      onConfirm={handleConfirm}
      onChange={setCurrentValue}
      onActionClick={handleCancel}
      onClear={handleCancel}
      onFocus={onClick}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
