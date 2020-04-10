/*
 * @文件描述: 自定义底部导航
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-13 18:21:05
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-10 13:53:43
 */
import Taro from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";
import { GlobalData } from "@/interfaces/common";
import { isEqual } from "lodash";
import styles from "./index.module.less";

const list = [
  {
    pagePath: "/pages/home/index",
    text: "首页",
    iconPath: "../assets/tabBarImgs/icn_tab_home_normal.png",
    selectedIconPath: "../assets/tabBarImgs/icn_tab_home_focus.png",
    badgeField: "homeBadge"
  },
  {
    pagePath: "/pages/profile/index",
    text: "我的",
    iconPath: "../assets/tabBarImgs/icn_tab_my_normal.png",
    selectedIconPath: "../assets/tabBarImgs/icn_tab_my_focus.png",
    badgeField: "profileBadge"
  }
];

class CustomTabBar extends Taro.Component {
  state = {
    selected: ((global as unknown) as GlobalData).globalData.selectedIndex,
    /** badge number 对应字段 badgeField */
    profileBadge: 1
  };

  shouldComponentUpdate = (_nextProps, nextState) => {
    return !isEqual(this.state, nextState);
  };

  switchTab = async (item, index) => {
    const url = item.pagePath;
    ((global as unknown) as GlobalData).globalData.selectedIndex = index;
    this.setState({ selected: index });
    Taro.switchTab({ url });
  };

  render() {
    return (
      <CoverView className={styles.tabBar}>
        <CoverView className={styles.tabBarBorder} />
        {list.map((item, index) => {
          const isSelected = this.state.selected === index;
          const badgeNum = this.state[item.badgeField];
          return (
            <CoverView
              className={styles.tabBarItem}
              onClick={() => this.switchTab(item, index)}
              data-path={item.pagePath}
              key={item.text}
            >
              <CoverView className={styles.badgeContainer}>
                <CoverImage
                  src={isSelected ? item.selectedIconPath : item.iconPath}
                />
                <CoverView
                  style={{ display: badgeNum ? "" : "none" }}
                  className={styles.badge}
                >
                  {badgeNum >= 100 ? "99+" : badgeNum}
                </CoverView>
              </CoverView>
              <CoverView
                style={{
                  color: isSelected
                    ? "rgba(0, 162, 0, 1)"
                    : "rgba(0, 0, 0, 0.6)"
                }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </CoverView>
    );
  }
}

export default CustomTabBar;
