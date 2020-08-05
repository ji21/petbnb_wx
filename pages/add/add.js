// pages/add/add.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    add: true,
    popUp: false,
    popAdd: false
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
    wx.redirectTo({
      url: '/pages/landing/landing'
    })
  },
  goToProfile: function() {
    wx.redirectTo({
      url: '/pages/profile/profile',
    })
  },
  enablePopUp: function () {
    console.log('showing')
    this.setData({popUp: true});
    console.log(this.data)
  },
  hidePopUp: function() {
    console.log('hiding')
    this.setData({popUp: false})
    // this.setData({})
  },
  enableAddPopUp: function() {
    this.setData({popAdd: true})
  },
  rehidePopAdd: function() {
    this.setData({popAdd: false})
  },
  getUserInfo: function(e) {
    console.log(e)
    this.goToProfile()
  }
})