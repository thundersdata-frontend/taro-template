/*
 * @文件描述: iceStore
 * @重要说明: iceStore本身依赖react，所以需要更改源码来适配taro，并且不能使用最新版本，最新版本需要Provider才能使用，同样不适用taro
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-19 16:18:50
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-09 17:49:03
 */
import IceStore from "@/utils/@ice/store";
import logger from "@ice/store-logger";
import { Middleware } from "@/utils/@ice/store/lib/types";
import baseStore from "./base";

const iceStore = new IceStore();
const middleware: Middleware[] = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}
iceStore.applyMiddleware(middleware);

const stores = iceStore.registerStores({
  baseStore
});
export default stores;
