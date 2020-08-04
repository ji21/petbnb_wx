// pages/landing/landing.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    popUp: false,
    blur: false,
    home: true,
    showLogin: false
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
  goToShow: function() {
    wx.redirectTo({
      url: '/pages/show/show',
    })
  },

  enablePopUp: function () {
    console.log('showing')
    this.setData({popUp: true, blur: true});
    console.log(this.data)
  },
  hidePopUp: function() {
    console.log('hiding')
    this.setData({popUp: false})
    // this.setData({})
  },
  goToLanding: function() {
    if (this.__route__ === "pages/landing/landing") {
      this.setData({home: true});
      console.log(1);
    }
  },
  goToAdd: function() {
    console.log(2)
  },
  goToProfile: function() {
    if (app.globalData.userInfo == null ) {
        console.log("ok")
        this.setData({showLogin: true})
    } else {
      wx.redirectTo({
        url: '/pages/profile/profile',
      })
    }
  },
  rehidePopUp: function() {
    console.log("hiding popup")
    this.setData({showLogin: false})
  }
})
