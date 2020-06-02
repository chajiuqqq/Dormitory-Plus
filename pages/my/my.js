Page({
  data:{
    "headImagePath":"/images/headImage/head.jpg",
    "userName":"小余",
    "functionList":[
      {
        "imagePath":"/images/icons/functionIcnos/wode.png",
        "title":"我的信息",
        "funname":"f1"
      },
      {
        "imagePath":"/images/icons/functionIcnos/water.png",
        "title":"在线订水",
        "funname":"f2"
      },
      {
        "imagePath":"/images/icons/functionIcnos/fix.png",
        "title":"预定维修",
        "funname":"f3"
      },
      {
        "imagePath":"/images/icons/functionIcnos/contact.png",
        "title":"联络汇总",
        "funname":"f4"
      },
      {
        "imagePath":"/images/icons/functionIcnos/tousu.png",
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
 
  },
  f3: function() {
    wx.navigateTo({
      url: '/pages/functions/repair/repair'
    })
  },
  f4: function() {
 
  },
  f5: function() {

  }
})