/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-16 14:24:58
 * @LastEditors: 廖军
 * @LastEditTime: 2020-10-17 16:35:30
 */
const path = require('path');
// 是否打包成cordova所需要的www文件内容
const isCordova = process.argv.includes('cordova');

const config = {
  projectName: 'taro-template',
  date: '2020-2-16',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: isCordova ? 'www' : 'build',
  alias: {
    '@/constant': path.resolve(__dirname, '../src/constant'),
    '@/utils': path.resolve(__dirname, '../src/utils'),
    '@/services': path.resolve(__dirname, '../src/services'),
    '@/components': path.resolve(__dirname, '../src/components'),
    '@/assets': path.resolve(__dirname, '../src/assets'),
    '@/hooks': path.resolve(__dirname, '../src/hooks'),
  },
  uglify: {
    enable: true,
    config: {
      // 配置项同 https://github.com/mishoo/UglifyJS2#minify-options
    },
  },
  csso: {
    enable: true,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    },
  },
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      'lodash',
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      [
        'transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime',
        },
      ],
    ],
  },
  plugins: [],
  defineConstants: {},
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/^(?!\.at-).*/],
        },
      },
      url: {
        enable: true,
        config: {
          limit: 10240, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: isCordova ? './' : '/', // cordova 里面的路径规则有所区别
    staticDirectory: 'static',
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/^(?!\.at-).*/],
        },
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
