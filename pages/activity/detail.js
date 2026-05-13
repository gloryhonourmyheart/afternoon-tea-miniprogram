const app = getApp()

Page({
  data: {
    activity: {}
  },

  onLoad: function (options) {
    const id = parseInt(options.id)
    const activity = app.globalData.activities.find(item => item.id === id)
    if (activity) {
      this.setData({
        activity: activity
      })
    }
  },

  onShareAppMessage: function () {
    return {
      title: this.data.activity.title,
      path: `/pages/activity/detail?id=${this.data.activity.id}`
    }
  },

  bookActivity: function () {
    wx.showModal({
      title: '报名成功',
      content: `您已成功报名「${this.data.activity.title}」，期待您的参与！`,
      showCancel: false
    })
  }
})