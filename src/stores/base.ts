/*
 * @文件描述: 基础模块
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-19 17:04:11
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-09 17:45:00
 */
import { PageModel } from "@/interfaces/common";
import { INITIAL_PAGINATION } from "./constant";

const baseStore = {
  pagination: INITIAL_PAGINATION as PageModel,

  /**
   * 避开this指向引起的问题
   * @param key
   * @param value
   */
  setStoreValue<T>(key: string, value: T) {
    this[key] = value;
  },

  /** 设置分页 */
  setPagination(pagination) {
    this.pagination = pagination;
  }
};

export default baseStore;
