/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-04-07 15:15:12
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-10 18:39:59
 */
import Taro, { useDidShow, useScope } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { BOTTOM_TABS_MAP } from '@/stores/constant';
import { setTabBarState } from '@/utils/object';
import CustomButton from '@/components/CustomButton';
import styles from './index.module.less';

const Home: Taro.FC = () => {
  const scope = useScope();

  useDidShow(async () => {
    setTabBarState({ selected: BOTTOM_TABS_MAP.home }, scope);
  });

  return (
    <View className={styles.container}>
      <CustomButton
        onClick={() => Taro.navigateTo({ url: '/packageA/pages/detail/index' })}
        className="buttonGroup-leftBtn"
      >
        前往详情页
      </CustomButton>
    </View>
  );
};

Home.config = {
  navigationBarTitleText: '首页',
};

export default Home;
