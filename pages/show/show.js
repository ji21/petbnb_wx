// pages/show/show.js

let app = getApp();
let host = app.globalData.host;
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    console.log(options)
    wx.request({
      url: `${host}api/v1/pets/${options.id}`,
      method: "GET", 
      success: (res) => {
        page.setData({pet: res.data})
        //this.setData(res.data)
      }}
    )
  },

  addBooking: function(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/addBooking/addBooking?id=${id}`,
    })
    
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
    wx.hideLoading()
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
    console.log(this.__route__)
    if (this.__route__ === "pages/landing/landing") {
      this.setData({home: true});
      console.log(1);
    } else {
      wx.redirectTo({
        url: '/pages/landing/landing',
      })
    }
  },
  goToAdd: function() {
    wx.redirectTo({
      url: '/pages/add/add',
    })
  },
  goToProfile: function() {
    wx.redirectTo({
      url: '/pages/profile/profile',
    })
  }
})