// pages/landing/landing.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    popUp: false,
    home: true,
    petName: null,
    petGender: null,
    petBreed: null,
    petNeutered: null,
    petDescription: null,
    petPrice: null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request({
      url: 'the pets url',
      success: (res) => {
        console.log(res)
        //this.setData(res.data)
      }
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
  goToSummary: function() {
    wx.redirectTo({
      url: '/pages/show/show',
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
  goToLanding: function() {
    if (this.__route__ === "pages/landing/landing") {
      this.setData({home: true});
      console.log(1);
    }
  },
  goToAdd: function() {
    wx.redirectTo({
      url: '/pages/add/add',
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    this.goToProfile()
  },
  goToProfile: function() {
    wx.redirectTo({
      url: '/pages/profile/profile',
    })
  }
})
