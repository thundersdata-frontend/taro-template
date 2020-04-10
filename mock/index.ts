/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-03-05 15:37:04
 * @LastEditors: 廖军
 * @LastEditTime: 2020-04-01 14:43:59
 */

export default {
  // 商品列表
  'commodity/list': {
    code: 2000,
    message: '',
    success: true,
    data: [
      {
        commoditySn: 'C-sda34123-131',
        productTitle: '四川红芽姜现挖新鲜仔姜',
        productSubtitle: '醋泡姜生姜菜姜',
        coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
        fullCategoryPaht: '果蔬/绿叶青',
        originPrice: 1060,
        sellingPrice: 1460,
        freeStock: 1000,
        saleAreaLimited: false, // 是否销售地区限制
        isOnSale: false, // 是否在售
        hot: false, // 是否为热门
        // 以下未提供
        soldPercentage: 80,
        categories: [
          {
            specificationValue: 500,
            specificationUnit: '克',
            originPrice: 12.6,
            sellingPrice: 14.6,
            freeStock: 1000,
          },
          {
            specificationValue: 1000,
            specificationUnit: '克',
            originPrice: 20.6,
            sellingPrice: 22.6,
            freeStock: 1000,
          },
        ],
      },
      {
        commoditySn: 'C-sda34123-132',
        productTitle: '小贝贝南瓜当季新鲜',
        productSubtitle: '当季迷你小南瓜板栗子味',
        coverImage: 'http://talkimages.cn/images/medium/20153237/tkf005_2324427.jpg',
        fullCategoryPaht: '果蔬/绿叶青',
        originPrice: 1460,
        sellingPrice: 1990,
        freeStock: 1000,
        saleAreaLimited: false, // 是否销售地区限制
        isOnSale: true, // 是否在售
        hot: false, // 是否为热门
        // 以下未提供
        soldPercentage: 100,
        categories: [
          {
            specificationValue: 400,
            specificationUnit: '克',
            originPrice: 12.6,
            sellingPrice: 14.6,
            freeStock: 1000,
          },
          {
            specificationValue: 1000,
            specificationUnit: '克',
            originPrice: 20.6,
            sellingPrice: 22.6,
            freeStock: 1000,
          },
        ],
      },
      {
        commoditySn: 'C-sda34123-133',
        productTitle: '东北大白菜新鲜蔬菜农家菜',
        productSubtitle: '深山现挖 嫩脆爽口 蔬中一绝',
        coverImage: 'http://img1.juimg.com/170418/330746-1F41QII024.jpg',
        fullCategoryPaht: '果蔬/绿叶青',
        originPrice: 360,
        sellingPrice: 480,
        freeStock: 1000,
        saleAreaLimited: false, // 是否销售地区限制
        isOnSale: true, // 是否在售
        hot: false, // 是否为热门
        // 以下未提供
        soldPercentage: 70,
        categories: [
          {
            specificationValue: 300,
            specificationUnit: '克',
            originPrice: 12.6,
            sellingPrice: 14.6,
            freeStock: 1000,
          },
          {
            specificationValue: 1000,
            specificationUnit: '克',
            originPrice: 20.6,
            sellingPrice: 22.6,
            freeStock: 1000,
          },
        ],
      },
      {
        commoditySn: 'C-sda34123-134',
        productTitle: '山东大蒜新鲜蒜头干蒜多瓣蒜',
        productSubtitle: '深山现挖 嫩脆爽口 蔬中一绝',
        coverImage: 'http://img2.imgtn.bdimg.com/it/u=2221745333,2116502191&fm=26&gp=0.jpg',
        fullCategoryPaht: '果蔬/绿叶青',
        originPrice: 460,
        sellingPrice: 580,
        freeStock: 1000,
        saleAreaLimited: false, // 是否销售地区限制
        isOnSale: false, // 是否在售
        hot: false, // 是否为热门
        // 以下未提供
        soldPercentage: 50,
        categories: [
          {
            specificationValue: 500,
            specificationUnit: '克',
            originPrice: 12.6,
            sellingPrice: 14.6,
            freeStock: 1000,
          },
          {
            specificationValue: 1000,
            specificationUnit: '克',
            originPrice: 20.6,
            sellingPrice: 22.6,
            freeStock: 1000,
          },
        ],
      },
    ],
  },
  // 商品详情
  'commodity/detail': {
    code: 2000,
    message: '',
    success: true,
    data: {
      carouselItemList: [
        'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
        'http://img1.juimg.com/170418/330746-1F41QII024.jpg',
      ],
      detailItemList: [],
      commoditySn: 'C-sda34123-131',
      productTitle: '绝世保健-白玉萝卜',
      productSubtitle: '绝世保健-白玉萝卜-好吃',
      fullCategoryPaht: '果蔬/绿叶青',
      originPrice: 1260,
      sellingPrice: 1460,
      freeStock: 1000,
      saleAreaLimited: false,
      limitedSaleArea: ['地址sn1', '地址sn2'],
      isOnSale: false,
      hot: false,
      // 这个未定
      categories: [
        {
          categoryId: 0,
          specificationValue: 500,
          specificationUnit: '克',
          originPrice: 1260,
          sellingPrice: 1460,
          freeStock: 1000,
        },
        {
          categoryId: 1,
          specificationValue: 1000,
          specificationUnit: '克',
          originPrice: 2060,
          sellingPrice: 2260,
          freeStock: 1000,
        },
        {
          categoryId: 2,
          specificationValue: 500,
          specificationUnit: '千克',
          originPrice: 2460,
          sellingPrice: 2860,
          freeStock: 1000,
        },
        {
          categoryId: 3,
          specificationValue: 1000,
          specificationUnit: '千克',
          originPrice: 4060,
          sellingPrice: 4360,
          freeStock: 1000,
        },
      ],
    },
  },
  // 历史记录
  'history/list': {
    code: 2000,
    message: '',
    success: true,
    data: ['叶菜类', '小贝贝南瓜', '孢子甘蓝'],
  },
  // 订单列表
  'order/list': {
    code: 2000,
    message: '',
    success: true,
    data: [
      {
        orderId: '0000000000',
        orderStatus: 0,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
        ],
      },
      {
        orderId: '11111111',
        orderStatus: 1,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
          {
            commoditySn: 'C-sda34123-132',
            productTitle: '小贝贝南瓜当季新鲜',
            productSubtitle: '当季迷你小南瓜板栗子味',
            coverImage: 'http://talkimages.cn/images/medium/20153237/tkf005_2324427.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1460,
            sellingPrice: 1990,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: true, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 100,
          },
        ],
      },
      {
        orderId: '0000000001',
        orderStatus: 2,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
        ],
      },
      {
        orderId: '0000000002',
        orderStatus: 3,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
        ],
      },
      {
        orderId: '0000000003',
        orderStatus: 4,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
        ],
      },
      {
        orderId: '0000000004',
        orderStatus: 5,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
        ],
      },
      {
        orderId: '0000000005',
        orderStatus: 6,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
        ],
      },
      {
        orderId: '0000000006',
        orderStatus: 7,
        commodityList: [
          {
            commoditySn: 'C-sda34123-131',
            productTitle: '四川红芽姜现挖新鲜仔姜',
            productSubtitle: '醋泡姜生姜菜姜',
            coverImage: 'http://img2.imgtn.bdimg.com/it/u=2596602715,2309989475&fm=11&gp=0.jpg',
            fullCategoryPaht: '果蔬/绿叶青',
            originPrice: 1060,
            sellingPrice: 1460,
            freeStock: 1000,
            saleAreaLimited: false, // 是否销售地区限制
            isOnSale: false, // 是否在售
            hot: false, // 是否为热门
            // 以下未提供
            soldPercentage: 80,
          },
        ],
      },
    ],
  },
};
