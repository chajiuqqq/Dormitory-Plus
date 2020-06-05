const path=getApp().globalData.envPath
Page({
  data:{
    "headImagePath": path + "/images/head/head.jpg",
    "userName":"小周",
    "functionList":[
      {
        "imagePath": path + "/images/icons/functions/wode.png",
        "title":"我的信息",
        "funname":"f1"
      },
      {
        "imagePath":path + "/images/icons/functions/water.png",
        "title":"在线订水",
        "funname":"f2"
      },
      {
        "imagePath":path + "/images/icons/functions/fix.png",
        "title":"预定维修",
        "funname":"f3"
      },
      {
        "imagePath":path + "/images/icons/functions/contact.png",
        "title":"联络汇总",
        "funname":"f4"
      },
      {
        "imagePath":path + "/images/icons/functions/tousu.png",
        "title":"寝室投诉",
        "funname":"f5"
      }

    ]
  },
  f1: function() {
    wx.navigateTo({
      url: '/pages/functions/information/information'
    })
  },
  f2: function() {
    wx.navigateTo({
      url: '/pages/functions/waterbooking/waterbooking'
    })
  },
  f3: function() {
    wx.navigateTo({
      url: '/pages/functions/repair/repair'
    })
  },
  f4: function() {
    wx.navigateTo({
      url: '/pages/functions/connection/connection'
    })
  },
  f5: function() {
    wx.navigateTo({
      url: '/pages/functions/complaint/complaint'
    })
  }
})