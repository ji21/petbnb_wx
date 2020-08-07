// pages/show/show.js

let app = getApp();
let host = app.globalData.host;
var today = new Date();

let tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)

var dd1 = tomorrow.getDate();
var mm1 = tomorrow.getMonth() + 1;
var yyyy1 = tomorrow.getFullYear();

var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;

if(dd1<10) 
{
    dd1='0'+dd1;
} 

if(mm1<10) 
{
    mm1='0'+mm1;
} 

tomorrow = yyyy1+'-'+mm1+'-'+dd1;

Page({

  /**
   * Page initial data
   */
  data: {
    // date: 
    date: today,
    dateTom: tomorrow,
    hide: true
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(this.data)
    console.log("options", options)
    let page = this;
    wx.request({
      url: `${host}api/v1/pets/${options.id}`,
      method: "GET", 
      success: (res) => {
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
  },


  goToMe: function() {
    wx.redirectTo({
      url: '/pages/allbookings/allbookings',
    })
  },


  addBooking: function() {
    const start = this.data.date
    const end = this.data.dateTom
    const total = this.data.total
    const userId = app.globalData.userId 
    const id = this.data.pet.id
    const booking = {
      total: total,
      user_id: userId,
      pet_id: id,
      start_date: start,
      end_date: end
    }
    console.log(booking)
    wx.request({
      url: `https://petbnb-ji21.herokuapp.com/api/v1/pets/${id}/bookings`,
      method: 'POST',
      data: booking,
      success: () => {
        wx.redirectTo({
          url: '/pages/profile/profile',
        })
      }
    })
  },
  total: function(start, end) {
    start = start.replace(/-/g, "/")
    end = end.replace(/-/g, "/")
    const date1 = new Date(start);
    const date2 = new Date(end);
    const diffTime = Math.abs(date2 - date1)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const price = this.data.pet.price
    console.log(this.data.pet.price)
    console.log(diffDays)
    this.setData({total: diffDays*price})
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
    console.log(this.data.date)
  },
  bindDateTomChange: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      dateTom: e.detail.value, hide: false
    })
    const date = this.data.date
    const dateTom = this.data.dateTom
    console.log(this.data.date)
    console.log(this.data.dateTom)
    this.total(date, dateTom)
  },
})