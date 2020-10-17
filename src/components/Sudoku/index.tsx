/*
 * @文件描述: 九宫格入口
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-05 09:41:03
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:41:01
 */
import React from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.module.less';

export interface SudokuListType {
  title: string;
  url: string;
  image: string;
}

export interface SudokuProps {
  list: SudokuListType[];
  style?: React.CSSProperties;
}

const Sudoku: Taro.FC<SudokuProps> = props => {
  const { list = [], style = {} } = props;
  return (
    <View className={classnames('my-class', props['my-class'], styles.sudoku)}>
      {list.map((item, index) => {
        const { title, url, image } = item;
        return (
          <View
            style={style}
            className={styles.item}
            key={`${title}_${index}`}
            onClick={() => Taro.switchTab({ url })}
          >
            <Image className={styles.image} mode="aspectFill" src={image} />
            <View className={styles.title}>{title}</View>
          </View>
        );
      })}
    </View>
  );
};

Sudoku.externalClasses = ['my-class'];

export default Sudoku;
