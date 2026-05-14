Page({
  data: {
    historyList: [
      {
        month: '2024年5月',
        isActive: true,
        activities: [
          {
            id: 1,
            title: '英式下午茶礼仪课',
            date: '5月12日',
            status: '已完成',
            statusClass: 'success',
            image: 'https://picsum.photos/id/447/200/200'
          },
          {
            id: 2,
            title: '马卡龙制作工作坊',
            date: '5月5日',
            status: '已完成',
            statusClass: 'success',
            image: 'https://picsum.photos/id/452/200/200'
          }
        ]
      },
      {
        month: '2024年4月',
        isActive: true,
        activities: [
          {
            id: 3,
            title: '咖啡品鉴会',
            date: '4月28日',
            status: '已完成',
            statusClass: 'success',
            image: 'https://picsum.photos/id/453/200/200'
          },
          {
            id: 4,
            title: '花艺沙龙',
            date: '4月20日',
            status: '已取消',
            statusClass: 'cancelled',
            image: 'https://picsum.photos/id/454/200/200'
          },
          {
            id: 5,
            title: '红酒品鉴会',
            date: '4月15日',
            status: '已完成',
            statusClass: 'success',
            image: 'https://picsum.photos/id/455/200/200'
          }
        ]
      },
      {
        month: '2024年3月',
        isActive: false,
        activities: [
          {
            id: 6,
            title: '春日野餐派对',
            date: '3月25日',
            status: '已完成',
            statusClass: 'success',
            image: 'https://picsum.photos/id/456/200/200'
          }
        ]
      }
    ],
    totalCount: 12
  },

  onLoad: function() {

  },

  goBack: function() {
    wx.navigateBack();
  },

  viewDetail: function(e) {
    const activityId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/activity/detail?id=' + activityId
    });
  }
});