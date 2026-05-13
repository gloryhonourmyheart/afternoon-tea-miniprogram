Page({
  data: {
    activeTab: 0,
    tabs: ['美好瞬间', '生活灵感'],
    moments: [
      {
        id: 1,
        avatar: 'L',
        username: 'Lisa的下午茶',
        image: 'https://picsum.photos/id/1060/600/400',
        content: '今天的法式甜品课太治愈了！马卡龙配色美到犯规 🍰✨',
        likes: 128,
        comments: 32,
        time: '2小时前'
      },
      {
        id: 2,
        avatar: 'M',
        username: 'Mia的花艺日记',
        image: 'https://picsum.photos/id/152/600/400',
        content: '第一次尝试韩式插花，粉玫瑰和尤加利叶的搭配太温柔了 🌸',
        likes: 256,
        comments: 45,
        time: '5小时前'
      },
      {
        id: 3,
        avatar: 'A',
        username: 'Amy手作时光',
        image: 'https://picsum.photos/id/250/600/400',
        content: '香薰蜡烛DIY成功！薰衣草味道让人瞬间放松，推荐姐妹们试试 🕯️',
        likes: 189,
        comments: 28,
        time: '1天前'
      }
    ],
    inspirations: [
      {
        id: 1,
        avatar: 'S',
        username: 'Sophia穿搭',
        image: 'https://picsum.photos/id/180/600/400',
        content: '今日OOTD：温柔粉色系，适合下午茶约会 💕',
        likes: 342,
        comments: 67,
        time: '3小时前'
      },
      {
        id: 2,
        avatar: 'E',
        username: 'Emma美妆',
        image: 'https://picsum.photos/id/292/600/400',
        content: '约会必备妆容教程，自然又精致 ✨',
        likes: 521,
        comments: 89,
        time: '6小时前'
      },
      {
        id: 3,
        avatar: 'R',
        username: 'Rose家居',
        image: 'https://picsum.photos/id/360/600/400',
        content: '打造温馨小角落，香薰+绿植=治愈时光 🌿',
        likes: 278,
        comments: 54,
        time: '1天前'
      }
    ]
  },

  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeTab: index
    });
  },

  likeMoment(e) {
    const id = e.currentTarget.dataset.id;
    const tab = this.data.activeTab;
    const list = tab === 0 ? 'moments' : 'inspirations';
    const moments = this.data[list];
    const moment = moments.find(m => m.id === id);
    if (moment) {
      moment.likes++;
      this.setData({
        [list]: moments
      });
    }
  },

  shareMoment(e) {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  onShareAppMessage() {
    return {
      title: '美丽下午茶时光 - 遇见更好的自己',
      path: '/pages/community/community',
      imageUrl: 'https://picsum.photos/id/431/600/400'
    };
  }
});