Page({
  data:{
    "headImagePath":"cloud://do-r3ek7.646f-do-r3ek7-1257158075/images/headImage/head.jpg",
    "userName":"小周",
    "functionList":[
      {
        "imagePath":"cloud://do-r3ek7.646f-do-r3ek7-1257158075/images/icons/functionIcons/wode.png",
        "title":"我的信息",
        "funname":"f1"
      },
      {
        "imagePath":"cloud://do-r3ek7.646f-do-r3ek7-1257158075/images/icons/functionIcons/water.png",
        "title":"在线订水",
        "funname":"f2"
      },
      {
        "imagePath":"cloud://do-r3ek7.646f-do-r3ek7-1257158075/images/icons/functionIcons/fix.png",
        "title":"预定维修",
        "funname":"f3"
      },
      {
        "imagePath":"cloud://do-r3ek7.646f-do-r3ek7-1257158075/images/icons/functionIcons/contact.png",
        "title":"联络汇总",
        "funname":"f4"
      },
      {
        "imagePath":"cloud://do-r3ek7.646f-do-r3ek7-1257158075/images/icons/functionIcons/tousu.png",
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