/*
 * @文件描述: 轮播组件
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-04 10:24:21
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 17:27:29
 */
import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { Swiper, SwiperItem, Image, Video } from '@tarojs/components';
import classnames from 'classnames';

export interface CarouselListType {
  url?: string;
  src: string;
  type?: 'image' | 'video';
  autoplay?: boolean;
  loop?: boolean;
}

export interface CarouselProps {
  list: CarouselListType[];
  style?: React.CSSProperties;
  autoplay?: boolean;
}

const Carousel: Taro.FC<CarouselProps> = props => {
  const { list = [], style = {}, autoplay = true } = props;
  const [current, setCurrent] = useState(0);

  return (
    <Swiper
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        ...style,
      }}
      className={classnames('my-class', props['my-class'])}
      indicatorColor="rgba(255, 255, 255, 1)"
      indicatorActiveColor="rgba(0, 162, 0, 1)"
      circular
      indicatorDots
      autoplay={autoplay}
      onChange={e => setCurrent(e.detail.current)}
    >
      {list.map((item, index) => {
        const { url, src, type = 'image', loop = true } = item;
        // 默认自动播放
        const isVideoAutoplay =
          item.autoplay === undefined ? true : item.autoplay;
        return (
          <SwiperItem
            key={src}
            onClick={url ? () => Taro.navigateTo({ url }) : () => {}}
          >
            {type === 'image' && (
              <Image
                mode="aspectFill"
                style={{ width: '100%', height: '100%' }}
                src={src}
              />
            )}
            {type === 'video' && (
              <Video
                style={{ width: '100%', height: '100%' }}
                src={src}
                controls
                autoplay={isVideoAutoplay}
                // 只有显示的时候会播放声音
                muted={!(current === index)}
                loop={loop}
              />
            )}
          </SwiperItem>
        );
      })}
    </Swiper>
  );
};

Carousel.externalClasses = ['my-class'];

export default Carousel;
