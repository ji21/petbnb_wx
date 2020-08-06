// pages/add/add.js
const app = getApp();
const host = app.globalData.host

Page({

  /**
   * Page initial data
   */
  data: {
    gender: ['Male', 'Female'],
    selectedGender: "Select",
    neutered: ['Yes!', 'No.'],
    selectedNeutered: "Select",
    add: true,
    popUp: false,
    popAdd: false,
    deletePopUp: false,
    userId: app.globalData.userInfo,
  },
  changeNeutered: function(e) {
    console.log(e.detail.value);
    const value = e.detail.value;
    if (value === "0") {
      this.setData({selectedNeutered: "Yes!"});
    } else {
      this.setData({selectedNeutered: "No."});
    }
  },

  changeGender(e) {
    console.log(e.detail.value);
    const value = e.detail.value;
    if (value === "0") {
      this.setData({selectedGender: "Male"});
    } else {
      this.setData({selectedGender: "Female"});
    }
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
  enablePopUp: function (e) {
    console.log('showing')
    this.setData({popUp: true});
    console.log(this.data)
    const id = e.currentTarget.dataset.id
    console.log(id)
    this.setData({deleteId: id})
  },
  hidePopUp: function() {
    console.log('hiding')
    this.setData({popUp: false})
    // this.setData({})
  },
  enableAddPopUp: function(e) {
    this.setData({popAdd: true})
  },
  rehidePopAdd: function() {
    this.setData({popAdd: false})
  },
  getUserInfo: function(e) {
    console.log(e)
    this.goToProfile()
  },
  submit: function(e) {
    console.log(e.detail.value);
    const name = e.detail.value.name;
    const breed = e.detail.value.breed;
    const description = e.detail.value.description;
    const price = e.detail.value.price;
    const gender = e.detail.value.gender
    const neutered = e.detail.value.neutered
    const boo = neutered === "0"
    let boo2;
    gender === "0" ? boo2 = "Male": boo2 = "Female";
    const pet = {
      name: name,
      breed: breed,
      description: description,
      price: parseInt(price),
      gender: boo2,
      neutered: boo,
      age: 0,
      user_id: getApp().globalData.userId
    }
    wx.request({
      url: getApp().globalData.host + 'api/v1/pets',
      method: 'POST',
      data: pet,
      success(res) {
        console.log(res)
        wx.redirectTo({
          url: '/pages/add/add'
        });
      }
    })
    console.log(pet)
  },
  remove: function(e) {
    const id = this.data.deleteId
    console.log(id)
    wx.request({
      url: host + `api/v1/pets/${id}`,
      method: "DELETE",
      success: (res) => {
        wx.redirectTo({
          url: '/pages/add/add',
        })
      }
    })
  }
})
