Page({
  data: {},

  onLoad: function () {},

  navigateTo: function () {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  navigateToHistory: function() {
    wx.navigateTo({
      url: '/pages/history/history'
    });
  },

  navigateToFavorites: function() {
    wx.navigateTo({
      url: '/pages/favorites/favorites'
    });
  },

  navigateToMembership: function() {
    wx.navigateTo({
      url: '/pages/membership/membership'
    });
  },

  navigateToFollowing: function() {
    wx.navigateTo({
      url: '/pages/following/following'
    });
  }
})