import React from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import CustomButton from '@/components/CustomButton';
import { BOTTOM_TABS_MAP } from '@/constant';
import styles from './index.module.less';

const Home: Taro.FC = () => {
  useDidShow(() => {
    Taro.setTabBarBadge({ index: BOTTOM_TABS_MAP.home, text: '99' });
  });

  return (
    <View className={styles.container}>
      <CustomButton
        onClick={() => Taro.navigateTo({ url: '/packageA/pages/detail/index' })}
      >
        前往详情页
      </CustomButton>
    </View>
  );
};

export default Home;
