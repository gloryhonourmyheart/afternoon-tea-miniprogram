Page({
  data: {
    vipLevel: 'platinum',
    points: 1280,
    nextLevelPoints: 2000,
    expireDate: '2026.12.31',
    progress: 65,
    benefits: [
      { icon: '🎟️', name: '免费报名', desc: '每月3次免费活动' },
      { icon: '💝', name: '专属折扣', desc: '全场8折优惠' },
      { icon: '🎁', name: '生日礼包', desc: '生日月专属礼物' },
      { icon: '🚀', name: '优先预约', desc: '活动优先报名权' },
      { icon: '🎵', name: '专属客服', desc: '一对一服务' },
      { icon: '📊', name: '积分加倍', desc: '消费积分2倍' }
    ],
    levels: [
      { name: '普通会员', benefit: '基础权益', status: 'completed', points: 0 },
      { name: '白银会员', benefit: '500积分解锁', status: 'completed', points: 500 },
      { name: '铂金会员', benefit: '1000积分解锁', status: 'current', points: 1000 },
      { name: '钻石会员', benefit: '2000积分解锁', status: 'locked', points: 2000 }
    ],
    history: [
      { type: 'add', title: '参加活动获得', time: '2024-01-15', points: 100 },
      { type: 'add', title: '每日签到', time: '2024-01-14', points: 10 },
      { type: 'subtract', title: '积分兑换礼品', time: '2024-01-10', points: -200 },
      { type: 'add', title: '邀请好友奖励', time: '2024-01-08', points: 50 }
    ]
  },

  onLoad() {
    this.calculateProgress();
  },

  calculateProgress() {
    const currentPoints = this.data.points;
    const nextLevelPoints = this.data.nextLevelPoints;
    const progress = Math.min((currentPoints / nextLevelPoints) * 100, 100);
    this.setData({
      progress: Math.round(progress)
    });
  },

  navigateTo(e) {
    const url = e.currentTarget.dataset.url;
    if (url) {
      wx.navigateTo({ url });
    }
  },

  upgradeVIP() {
    wx.showModal({
      title: '升级会员',
      content: '升级到钻石会员需要支付99元/年，是否继续？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '升级成功',
            icon: 'success'
          });
        }
      }
    });
  },

  onShareAppMessage() {
    return {
      title: '美丽下午茶时光 - 会员中心',
      path: '/pages/membership/membership',
      imageUrl: 'https://picsum.photos/id/431/600/400'
    };
  }
});