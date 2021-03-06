// pages/showBooking/showBooking.js
const app = getApp()
let host = app.globalData.host;

Page({

  /**
   * Page initial data
   */
  data: {
    profile: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(this.data)
    let page = this;
    wx.request({
      url: `${host}api/v1/pets?pet_id=${options.id}`,
      method: "GET", 
      success: (res) => {
        console.log(res.data)
        page.setData({pet: res.data})
        //this.setData(res.data)
      }}
    )
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

  goToAdd: function() {
    wx.redirectTo({
      url: '/pages/add/add',
    })
  },
  goToLanding: function() {
    wx.redirectTo({
      url: '/pages/landing/landing',
    })
  }
})
