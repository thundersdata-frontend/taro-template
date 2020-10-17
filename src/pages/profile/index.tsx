/*
 * @文件描述: 我的-个人中心
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-03-11 18:30:37
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 16:46:30
 */
import Taro, { useDidShow } from '@tarojs/taro';
import React, { useState } from 'react';
import { View, OpenData } from '@tarojs/components';
import { AtButton, AtAvatar } from 'taro-ui';
import ListItemCard from '@/components/ListItemCard';
import { tryCatch, checkIsLogin } from '@/utils/exception-handling';
import { transformSecretPhone } from '@/utils/string';
import styles from './index.module.less';

const Profile: Taro.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useDidShow(async () => {
    tryCatch(async () => {
      // 检查登录状态
      const userIslogin = await checkIsLogin();
      if (userIslogin) {
        setIsLogin(true);
      }
    });
  });

  // 调用获取手机号等信息
  const getPhoneNumber = e => {
    // 若点击允许
    if (e.detail.errMsg.indexOf('ok') > -1) {
      // e.detail.encryptedData为加密数据，向后端请求解密的手机号
      console.log('e: ', e);
      setIsLogin(true);
    }
  };

  /** 退出登录 */
  const handleLogOut = async () => {
    await Taro.clearStorage();
    setIsLogin(false);
    Taro.showToast({ title: '退出登录成功!', icon: 'success' });
  };

  return (
    <View className={styles.profileWrap}>
      <View className={styles.userInfoWrap}>
        <View className={styles.avator}>
          {isLogin ? (
            <OpenData type="userAvatarUrl"></OpenData>
          ) : (
            <AtAvatar
              className={styles.avator}
              circle
              image={require('@/assets/pic_avatar_default.png')}
            />
          )}
        </View>
        {isLogin ? (
          <View className={styles.userNameWrap}>
            <OpenData
              className={styles.userName}
              type="userNickName"
            ></OpenData>
            <View className={styles.phoneWrap}>
              {transformSecretPhone('15711111111')}
            </View>
          </View>
        ) : (
          <AtButton
            className={styles.loginBtn}
            openType="getPhoneNumber"
            onGetPhoneNumber={getPhoneNumber}
          >
            点击登录
          </AtButton>
        )}
      </View>
      <ListItemCard
        title="联系客服"
        titleStyle={{ fontSize: '16px', color: '#333' }}
        borderBottom
        extraText="40012341234"
        extraIcon="icon_detail_service"
        extraIconStyle={{ color: '#00A200', fontSize: '16px' }}
      />
      {isLogin && (
        <View className={styles.loginOutBtn} onClick={handleLogOut}>
          退出登录
        </View>
      )}
    </View>
  );
};

export default Profile;
