Page({
  data: {
    favorites: [
      {
        id: 1,
        title: '法式甜品制作体验',
        date: '5月20日',
        image: 'https://picsum.photos/id/458/200/150'
      },
      {
        id: 2,
        title: '英式下午茶礼仪课',
        date: '6月5日',
        image: 'https://picsum.photos/id/459/200/150'
      },
      {
        id: 3,
        title: '咖啡品鉴会',
        date: '6月15日',
        image: 'https://picsum.photos/id/460/200/150'
      },
      {
        id: 4,
        title: '花艺沙龙',
        date: '6月25日',
        image: 'https://picsum.photos/id/461/200/150'
      }
    ],
    followedActivities: [
      {
        id: 5,
        title: '红酒品鉴会',
        date: '6月10日',
        time: '14:00',
        image: 'https://picsum.photos/id/462/100/100',
        isFollowed: true
      },
      {
        id: 6,
        title: '马卡龙制作工作坊',
        date: '6月18日',
        time: '10:00',
        image: 'https://picsum.photos/id/463/100/100',
        isFollowed: true
      }
    ],
    followedUsers: [
      {
        id: 1,
        name: 'Emma',
        role: '美食达人',
        avatar: 'https://picsum.photos/id/464/100/100'
      },
      {
        id: 2,
        name: 'Sophie',
        role: '茶艺师',
        avatar: 'https://picsum.photos/id/465/100/100'
      },
      {
        id: 3,
        name: 'Lily',
        role: '花艺师',
        avatar: 'https://picsum.photos/id/466/100/100'
      },
      {
        id: 4,
        name: 'Grace',
        role: '品酒师',
        avatar: 'https://picsum.photos/id/467/100/100'
      },
      {
        id: 5,
        name: 'Mia',
        role: '咖啡师',
        avatar: 'https://picsum.photos/id/468/100/100'
      }
    ]
  },

  onLoad: function() {

  },

  goBack: function() {
    wx.navigateBack();
  },

  viewActivity: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/activity/detail?id=' + id
    });
  },

  signUp: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '报名确认',
      content: '确定要报名参加此活动吗？',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '报名成功',
            icon: 'success'
          });
        }
      }
    });
  }
});