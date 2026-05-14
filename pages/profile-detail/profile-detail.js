Page({
  data: {
    userInfo: {
      avatar: '优雅',
      nickname: '优雅下午茶',
      desc: '热爱生活，享受每一个美好瞬间',
      gender: '女',
      birthday: '1995年6月15日',
      city: '上海市',
      occupation: '设计师',
      hobbies: '下午茶、旅行、摄影、烘焙',
      signature: '生活不止眼前的苟且，还有诗和远方的下午茶 🍵✨',
      tags: ['甜品控', '旅行达人', '文艺青年', '美食家', '摄影爱好者'],
      achievements: [
        { icon: '🎖️', text: '活动达人 - 参加50+活动' },
        { icon: '🌟', text: '魅力之星 - 获得1000+点赞' },
        { icon: '💫', text: '分享达人 - 发布50+动态' }
      ],
      stats: {
        activities: 12,
        following: 89,
        followers: 156
      }
    }
  },

  onLoad: function() {
    // 页面加载时的逻辑
  },

  goBack: function() {
    wx.navigateBack();
  },

  editProfile: function() {
    wx.showModal({
      title: '编辑资料',
      content: '编辑资料功能开发中...',
      showCancel: false
    });
  },

  changeAvatar: function() {
    wx.showActionSheet({
      itemList: ['拍照', '从相册选择'],
      success: function(res) {
        wx.showToast({
          title: '头像更换功能开发中',
          icon: 'none'
        });
      }
    });
  }
});