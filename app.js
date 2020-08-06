//app.js

const AV = require('./utils/av-weapp-min.js')
const config = require('./utils/key')

AV.init({
  appId: config.appId,
  appKey: config.appKey,
  serverURLs: "https://ienhaftr.lc-cn-n1-shared.com"
});

App({
  onLaunch: function () {
    // 展示本地存储能力
   
    console.log(1);
    // 登录
    wx.login({
      success: (res) => {
      // insert next code here
        wx.request({
          url: getApp().globalData.host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
        // insert next code here
          success: (res) => {
            console.log('global resres', res)
            this.globalData.userId = res.data.userId
            event.emit('hasUserId')
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null, 
    // host: 'http://localhost:3000/',
    host: 'https://petbnb-ji21.herokuapp.com/'
  }
})
