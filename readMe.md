<!--
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-19 17:24:13
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-18 14:42:58
 -->

### pont 适配与改进

1. 避免全局暴露 API，推荐使用引入的方式；
2. 原先的 request 请求不适用于小程序，基于 taro 重新封装了 taro-request 方法文件并修改 pontTemplate 的生成方法；
3. pontTemplate 的生成方法中添加了对接口返回值传递的 interface 字符拼接；

### taro 其他需要注意的地方

1. 全局变量在小程序中以 global 的声明存在，而不是 window，对应的 lodash 和之前的全局保存参数的方式都要修改；
2. 添加自定义组件的时候，涉及全局样式，需要添加 option addGlobalClass 为 true 才能生效；
3. iceStore 本身依赖 react，所以需要更改源码来适配 taro，并且不能使用最新版本，最新版本需要 Provider 才能使用，同样不适用 taro；
4. taro 有自身封装的一些本地存储等方法；
5. taro 的路由配置在 app.ts config.pages 中；
6. 如果有一些需要定制的组件可以先到物料市场看一下（当然也要做个评估再用，不好用就自己定制）：https://taro-ext.jd.com/
7. iceStore useStore 方法依赖与 hooks 方法，在不同的平台下，需要引入对应的 taro 包，否则会报错的；
8. taro 可支持 JSX 的组件间传递，但是元素传入 JSX 的属性名必须以 render 开头如: renderHeader；
9. taro 目前不支持 Fragments；
10. taro ScrollView onRefresherRefresh 方法可被触发的前提条件是内容区可滚动且开启 refresherEnabled ，同时可用 refresherTriggered 控制 refresh 状态，配合 useRefresh 函数使用；
11. taro 向自定义组件传递 class 可以用 externalClasses = ['my-class']的方式，可以参考 https://nervjs.github.io/taro/docs/component-style.html#%E5%A4%96%E9%83%A8%E6%A0%B7%E5%BC%8F%E7%B1%BB
12. my-class 方法在 h5 环境会有问题，需要再添加一个 props['my-class']来兼容；
13. 要设置底部TabBar的徽标显示可在 custom-tab-bar 文件中先设置 tab-bar 对应的 badgeField 作为 badge 字段名，再在 state 中维护。若要修改则调用在 utils/object 中的 setTabBarState 函数修改对应的 badgeField 字段的属性值，若情况较复杂可保存在本地缓存。
14. 在 Taro 中，JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误。

### 微信小程序需要注意的地方

1. 要下载微信开发者工具配合使用，需要设置关闭 ES6 转 ES5 功能，关闭上传代码时样式自动补全，关闭代码压缩上传配置，否则可能报错。
2. 后台接口调试，需要把域名配置到微信小程序的域名信息里面；
3. 微信小程序的 appid 在 project.config.json 中配置；
4. 小程序的 wxss 文件 font-face 的 url 不接受 http 地址作为参数;
5. 微信小程序中必须使用经过配置的 https 合法域名，但在开发环境可以通过开发者工具打开本地设置，勾选“不校验合法域名……”使用测试环境接口地址；
6. 小程序对打包文件大小有较高的要求，对应的解决方案可以先进行分包处理、通过 webpack 压缩打包代码、上传图片到云端等方法解决；
7. 微信各类授权窗口是自带的，开发者工具和真机上显示的可能会不一样；
8. 图片等资源路径，不能含中文，否则在真机上无法显示，但在开发者工具上是正常的；
9. 登录: 微信小程序现在需要用点击 openType="getPhoneNumber" 按钮回调的方式来获取手机号加密信息进而向后端请求解密手机号，要获取用户信息则用 openType="getUserInfo" 的按钮,Taro.getUserInfo 方法将被微信废弃。
10. 登录: 最好把 session_key 保存在后端，如果保存在前端会有多端登录 session_key 失效的问题。
