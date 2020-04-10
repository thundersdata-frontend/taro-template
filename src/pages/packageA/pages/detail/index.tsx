/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-04-07 15:15:12
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-09 17:42:50
 */
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

const Detail: Taro.FC = () => {
  return <View>分包详情页</View>;
};

Detail.config = {
  navigationBarTitleText: "详情页"
};

export default Detail;
