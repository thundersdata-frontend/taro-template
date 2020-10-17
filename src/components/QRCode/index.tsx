/*
 * @文件描述: 创建二维码
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-28 11:20:41
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-16 16:40:35
 */
import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import QR from '@/utils/wxqrcode';
import { tryCatch } from '@/utils/exception-handling';

export interface QRCodeProps {
  text: string;
  typeNumber?: number; // max 40 越大可接受的text内容越多、越难被识别
  className?: string;
  style?: React.CSSProperties;
}

const QRCode: Taro.FC<QRCodeProps> = ({
  text,
  typeNumber = 5,
  style = {},
  className = '',
}) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    tryCatch(
      () => {
        setUrl(QR.createQrCodeImg(text, { typeNumber }));
      },
      { errorMessage: '二维码创建失败' },
    );
  }, [text, setUrl, typeNumber]);

  return (
    <View style={{ textAlign: 'center', ...style }} className={className}>
      <Image style="width: 300px; height: 300px; background: #fff;" src={url} />
    </View>
  );
};

export default Taro.memo(QRCode, (prev, next) => {
  return prev.text !== next.text;
});
