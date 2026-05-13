App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    userInfo: null,
    activities: [
      {
        id: 1,
        title: '法式甜品制作体验',
        image: 'https://picsum.photos/id/431/600/400',
        tags: ['#下午茶', '#甜品'],
        participants: 128,
        time: '周五 14:00',
        location: '市中心某咖啡馆',
        price: 199,
        description: '专业甜品师手把手教学，体验法式甜品的精致魅力'
      },
      {
        id: 2,
        title: '周末花艺插花沙龙',
        image: 'https://picsum.photos/id/118/600/400',
        tags: ['#花艺', '#美学'],
        participants: 96,
        time: '周六 10:00',
        location: '花艺工作室',
        price: 168,
        description: '学习韩式插花技巧，创作属于自己的花艺作品'
      },
      {
        id: 3,
        title: '小众艺术画展赏析',
        image: 'https://picsum.photos/id/175/600/400',
        tags: ['#画展', '#文艺'],
        participants: 75,
        time: '周日 14:00',
        location: '艺术展览馆',
        price: 88,
        description: '跟随艺术导览，深入理解当代艺术作品'
      },
      {
        id: 4,
        title: '闺蜜轻奢下午茶聚会',
        image: 'https://picsum.photos/id/225/600/400',
        tags: ['#社交', '#下午茶'],
        participants: 152,
        time: '周六 15:00',
        location: '高端西餐厅',
        price: 258,
        description: '精致下午茶套餐，与闺蜜共度美好时光'
      },
      {
        id: 5,
        title: '香薰蜡烛手作课堂',
        image: 'https://picsum.photos/id/429/600/400',
        tags: ['#手作', '#治愈'],
        participants: 83,
        time: '周五 19:00',
        location: '手作工坊',
        price: 158,
        description: '亲手制作专属香薰蜡烛，感受治愈时光'
      },
      {
        id: 6,
        title: '女性成长读书分享会',
        image: 'https://picsum.photos/id/307/600/400',
        tags: ['#读书', '#成长'],
        participants: 62,
        time: '周日 10:00',
        location: '书店咖啡馆',
        price: 58,
        description: '共读经典女性成长书籍，分享感悟与收获'
      }
    ]
  }
})