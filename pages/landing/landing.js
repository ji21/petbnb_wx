// pages/landing/landing.js
const app = getApp();
const globalData = getApp().globalData
const host = app.globalData.host;
const userId = app.globalData.userId;
// import event from '../../utils/event';

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
  // https://petbnb-ji21.herokuapp.com/api/v1/pets?user_id=104

  onLoad: function (options) {
    const page = this
    // const promise = globalData.userId
    // const promise2 = 
    if (app.globalData.userId) {
      const id = app.globalData.userId
      wx.request({
        url: host + `api/v1/pets?user_id=${id}`,
        success: (res) => {
          page.setData({pets: res.data})
        }
      }) 
    } else {
      app.userIdCallback = () => {
        const id = app.globalData.userId
        wx.request({
          url: host + `api/v1/pets?user_id=${id}`,
          success: (res) => {
            page.setData({pets: res.data})
          }
        })
      }
    }

    // new Promise(promise).then(a=>console.log(a))
  },

  // getPets() {
  //   const page = this
  //   console.log("getting pets")
  //   wx.request({
  //     url: host + `api/v1/pets`,
  //     success: (res) => {
  //       page.setData({pets: res.data})
  //       console.log(page.data)
  //     }
  //   })
  // },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("global data in landing", globalData)
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
  goToSummary: function(e) {
    // console.log(e)
    const id = e.currentTarget.dataset.id
    wx.showLoading({
      title: "loading 99"
    })
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
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
  },

  goToMe: function() {
    wx.redirectTo({
      url: '/pages/allbookings/allbookings',
    })
  }

})
