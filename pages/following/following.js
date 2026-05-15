Page({
  data: {
    activeTab: 'activities',
    followingActivities: [
      {
        id: '1',
        title: '红酒品鉴会',
        date: '6月10日 14:00',
        location: '市中心红酒庄',
        price: 298,
        image: 'https://picsum.photos/id/1080/400/300'
      },
      {
        id: '2',
        title: '花艺设计工作坊',
        date: '6月15日 10:00',
        location: '花园咖啡馆',
        price: 168,
        image: 'https://picsum.photos/id/118/400/300'
      },
      {
        id: '3',
        title: '英式下午茶礼仪课',
        date: '6月20日 14:30',
        location: '优雅茶室',
        price: 198,
        image: 'https://picsum.photos/id/431/400/300'
      }
    ],
    followingUsers: [
      {
        id: '1',
        avatar: 'M',
        name: '抹茶控小美',
        desc: '热爱抹茶和一切美好事物'
      },
      {
        id: '2',
        avatar: 'L',
        name: 'Lisa的下午茶',
        desc: '分享精致生活方式'
      },
      {
        id: '3',
        avatar: 'S',
        name: '甜品师小雪',
        desc: '法式甜品制作达人'
      }
    ]
  },

  switchTab: function(tab) {
    this.setData({
      activeTab: tab
    });
  },

  goToDetail: function() {
    wx.navigateTo({
      url: '/pages/activity/detail'
    });
  },

  goToUser: function() {
    wx.navigateTo({
      url: '/pages/profile-detail/profile-detail'
    });
  },

  handleUnfollow: function(e) {
    e.stopPropagation();
    wx.showModal({
      title: '取消关注',
      content: '确定要取消关注吗？',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '已取消关注',
            icon: 'success'
          });
        }
      }
    });
  }
})