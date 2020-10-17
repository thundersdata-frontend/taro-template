/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-16 14:24:58
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 10:22:37
 */
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  // 小程序端专用配置
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240, // 文件大小限制
          },
        },
      },
    },
  },
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
  },
};
