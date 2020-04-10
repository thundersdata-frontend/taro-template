/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-02-18 17:22:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-09 18:35:40
 */
export interface CustomWindow extends Window {
  gMenus: MenuItemConfig[];
  requestConfig: {
    withCredentials: boolean;
    getToken: () => Promise<string>;
  };
  authConfig: {
    url: string;
    client_id: string;
    client_secret: string;
    password_min: number;
    password_max: number;
    company: number;
  };
}

export interface GlobalData {
  globalData: {
    selectedIndex: number;
  };
}

export interface MenuItemConfig {
  name: string;
  link?: string;
  icon?: string;
  children?: MenuItemConfig[];
}

// 导航配置
export interface ListTabBar {
  title: string;
  url: string;
  iconDefault: string;
  iconActive: string;
  badge?: number;
}

export interface SelectOption {
  label: string;
  value: number | string;
}

export interface PageModel {
  page: number;
  pageSize: number;
}

export type SizeType = 'small' | 'default' | 'large';
