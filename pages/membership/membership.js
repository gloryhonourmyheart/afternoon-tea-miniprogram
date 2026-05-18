Page({
  data: {
    vipInfo: {
      icon: '👑',
      levelName: '铂金会员',
      level: 'platinum',
      points: 1280,
      expireDate: '2026.12.31'
    },
    progress: 65,
    nextLevelName: '钻石会员',
    neededPoints: 720,
    upgradeBtnText: '升级钻石会员',
    checkedIn: false,
    showModal: false,
    modalTitle: '',
    modalContent: '',
    modalAction: '',
    benefits: [
      { icon: '🎟️', name: '免费报名', desc: '每月3次免费活动', detail: '铂金会员每月可免费参加3次活动，不限活动类型。活动费用将从会员权益中扣除，无需额外支付。' },
      { icon: '💝', name: '专属折扣', desc: '全场8折优惠', detail: '铂金会员在所有活动报名时享受8折优惠，与免费报名权益可叠加使用。' },
      { icon: '🎁', name: '生日礼包', desc: '生日月专属礼物', detail: '生日当月可获得精美下午茶礼盒一份，包含茶叶、点心等，价值299元。' },
      { icon: '🚀', name: '优先预约', desc: '活动优先报名权', detail: '热门活动提前24小时开放预约，确保铂金会员优先获得名额。' },
      { icon: '🎵', name: '专属客服', desc: '一对一服务', detail: '专属客服微信，7x24小时在线，活动咨询、投诉建议优先处理。' },
      { icon: '📊', name: '积分加倍', desc: '消费积分2倍', detail: '所有活动消费积分翻倍，更快升级到钻石会员。' }
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
      { type: 'add', title: '邀请好友奖励', time: '2024-01-08', points: 50 },
      { type: 'add', title: '活动评价奖励', time: '2024-01-05', points: 20 },
      { type: 'add', title: '完善资料奖励', time: '2024-01-01', points: 30 }
    ]
  },

  onLoad() {
    this.calculateProgress();
    this.checkSignInStatus();
  },

  onShow() {
    this.checkSignInStatus();
  },

  calculateProgress() {
    const currentPoints = this.data.vipInfo.points;
    const nextLevelPoints = 2000;
    const progress = Math.min((currentPoints / nextLevelPoints) * 100, 100);
    const neededPoints = Math.max(nextLevelPoints - currentPoints, 0);
    
    this.setData({
      progress: Math.round(progress),
      neededPoints: neededPoints
    });
  },

  checkSignInStatus() {
    const today = new Date().toDateString();
    const lastSignIn = wx.getStorageSync('lastSignInDate');
    this.setData({
      checkedIn: lastSignIn === today
    });
  },

  handleCheckIn() {
    if (this.data.checkedIn) {
      wx.showToast({
        title: '今日已签到',
        icon: 'none'
      });
      return;
    }

    const today = new Date().toDateString();
    wx.setStorageSync('lastSignInDate', today);
    
    const newPoints = this.data.vipInfo.points + 10;
    const newHistory = [{
      type: 'add',
      title: '每日签到',
      time: this.formatDate(new Date()),
      points: 10
    }, ...this.data.history];

    this.setData({
      checkedIn: true,
      'vipInfo.points': newPoints,
      history: newHistory
    });

    this.calculateProgress();

    wx.showToast({
      title: '签到成功 +10积分',
      icon: 'success'
    });
  },

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  goToMall() {
    wx.showToast({
      title: '积分商城开发中',
      icon: 'none'
    });
  },

  inviteFriends() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  viewBenefits() {
    wx.showToast({
      title: '权益详情开发中',
      icon: 'none'
    });
  },

  viewAllHistory() {
    wx.showToast({
      title: '更多记录开发中',
      icon: 'none'
    });
  },

  showBenefitDetail(e) {
    const index = e.currentTarget.dataset.index;
    const benefit = this.data.benefits[index];
    
    this.setData({
      showModal: true,
      modalTitle: benefit.name,
      modalContent: benefit.detail,
      modalAction: 'benefit'
    });
  },

  hideModal() {
    this.setData({
      showModal: false
    });
  },

  preventHide() {},

  confirmModal() {
    this.hideModal();
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

  navigateTo(e) {
    const url = e.currentTarget.dataset.url;
    if (url) {
      wx.switchTab({ url });
    }
  },

  onShareAppMessage() {
    return {
      title: '邀请你加入美丽下午茶时光，双方各得50积分！',
      path: '/pages/index/index?invite=true',
      imageUrl: 'https://picsum.photos/id/431/600/400'
    };
  }
});