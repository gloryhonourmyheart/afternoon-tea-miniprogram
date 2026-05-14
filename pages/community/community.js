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
        icon: '🍵',
        title: '下午茶仪式感清单',
        items: ['精致的骨瓷茶具', '三层点心架', '新鲜鲜花装饰', '轻柔的背景音乐'],
        tags: ['#仪式感', '#下午茶']
      },
      {
        id: 2,
        icon: '📚',
        title: '适合下午茶阅读的书籍推荐',
        items: ['《小妇人》- 温馨治愈', '《山茶文具店》- 温暖人心', '《面包和汤和猫咪好天气》- 治愈系', '《人间草木》- 汪曾祺散文'],
        tags: ['#书单', '#阅读']
      },
      {
        id: 3,
        icon: '🎵',
        title: '下午茶BGM推荐',
        items: ['钢琴轻音乐 - 放松心情', '爵士咖啡馆 - 慵懒惬意', '自然白噪音 - 治愈解压', '古典音乐 - 优雅氛围'],
        tags: ['#音乐', '#BGM']
      },
      {
        id: 4,
        icon: '🌸',
        title: '春日下午茶穿搭灵感',
        items: ['碎花连衣裙 + 草帽', '温柔针织开衫 + 半身裙', '复古格纹套装', '浅色衬衫 + 牛仔裤'],
        tags: ['#穿搭', '#春日']
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
    const moments = this.data.moments;
    const moment = moments.find(m => m.id === id);
    if (moment) {
      moment.likes++;
      this.setData({
        moments: moments
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