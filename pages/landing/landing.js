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
      url: getApp().globalData.host + 'api/v1/pets',
      success: (res) => {
        page.setData({pets: res.data})
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

  enablePopUp: function (e) {
    this.setData({popUp: true});
    console.log(e.currentTarget.dataset.id)
    
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
  },
  goToProfile: function() {
    this.getUserInfo();
    wx.redirectTo({
      url: '/pages/profile/profile',
    })
  }
})
