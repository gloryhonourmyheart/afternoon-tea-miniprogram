# 美丽下午茶时光 - 微信小程序

一个专为女性打造的下午茶社交平台，让每一个下午都充满甜蜜与温馨。

## 🌸 项目简介

「美丽下午茶时光」是一款基于微信小程序的社交活动平台，致力于为女性用户提供优质的下午茶活动体验。

## ✨ 功能特性

### 首页（活动广场）
- 精美的 Hero Banner 展示品牌理念
- 核心价值展示（发现美、连接人、愉悦心）
- 热门活动卡片列表
- 社区分享功能入口

### 活动详情页
- 活动大图展示
- 时间、地点、价格信息
- 活动流程说明
- 一键报名功能

### 个人中心页
- 用户信息展示（头像、昵称、简介）
- 统计数据（参与活动、关注、粉丝）
- 功能菜单（我的活动、收藏、关注、会员中心、设置）
- 社交功能入口（活动群聊、私密私聊、安全机制）

## 🎨 设计风格

- **主色调**：粉色系 (#FF9BB3)
- **背景色**：淡粉色 (#FFF0F5)
- **设计理念**：优雅、温馨、女性化

## 🛠️ 技术栈

- 微信小程序原生开发
- WXML + WXSS + JavaScript
- 响应式设计

## 📁 项目结构

```
afternoon-tea-miniprogram/
├── app.js              # 应用入口，全局数据管理
├── app.json            # 全局配置，TabBar导航
├── app.wxss            # 全局样式
├── project.config.json # 项目配置
├── sitemap.json        # 站点地图
├── preview.html        # 网页预览版（无需微信即可查看）
├── images/             # TabBar图标资源
│   ├── discover.png
│   ├── discover-active.png
│   ├── profile.png
│   └── profile-active.png
├── pages/
│   ├── index/          # 首页-活动广场
│   │   ├── index.js
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── activity/       # 活动详情页
│   │   ├── detail.js
│   │   ├── detail.wxml
│   │   └── detail.wxss
│   └── profile/        # 个人中心页
│       ├── profile.js
│       ├── profile.wxml
│       └── profile.wxss
└── scripts/            # 辅助脚本
    ├── generate-icons.js
    └── make-icons.ps1
```

## 🚀 快速开始

### 方式1：微信开发者工具（推荐）

1. 下载安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开开发者工具，选择"导入项目"
3. 选择项目目录：`afternoon-tea-miniprogram`
4. 填写 AppID（可使用测试号）
5. 点击"预览"，使用微信扫码查看

### 方式2：网页预览（无需微信）

直接打开 `preview.html` 文件即可在浏览器中查看界面效果：
```bash
# 双击或使用浏览器打开
preview.html
```

## 📱 预览界面

预览页面包含三个核心页面：

| 页面 | 说明 |
|------|------|
| **首页** | Hero Banner + 核心价值 + 活动列表 + 社区分享 |
| **活动详情** | 活动信息 + 流程说明 + 报名按钮 |
| **个人中心** | 用户信息 + 统计数据 + 功能菜单 + 社交功能 |

## 📈 项目进度

- ✅ 微信小程序项目结构创建完成
- ✅ 首页（活动广场）开发完成
- ✅ 活动详情页开发完成
- ✅ 个人中心页开发完成
- ✅ TabBar导航配置完成
- ✅ 图标资源生成完成
- ✅ 网页预览版创建完成
- ✅ GitHub仓库提交完成

## 🌐 GitHub 仓库

🔗 **仓库地址**: `https://github.com/gloryhonourmyheart/afternoon-tea-miniprogram`

## 📝 License

MIT License

---

🍵 享受美好的下午茶时光 🌸