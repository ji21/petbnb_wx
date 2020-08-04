// pages/add/add.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    add: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  goToLanding: function() {
    if (this.__route__ === "pages/landing/landing") {
      this.setData({home: true});
      console.log(1);
    } else {
      wx.navigateTo({
        url: '/pages/landing/landing'
    })
  }},
  goToProfile: function() {
    if (app.globalData.userInfo == null ) {
      this.getUserInfo();
      console.log("ok")
    } else {
      wx.redirectTo({
        url: '/pages/profile/profile',
      })
    }
  }
})