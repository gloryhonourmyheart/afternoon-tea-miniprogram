const app = getApp()

Page({
  data: {
    activities: []
  },

  onLoad: function () {
    this.setData({
      activities: app.globalData.activities
    })
  },

  goToDetail: function (e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/activity/detail?id=${id}`
    })
  }
})