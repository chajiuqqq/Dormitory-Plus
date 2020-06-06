Page({
  data:{
    priceClass:[15,18,24],
    priceIndex : 0,
    timeIndex:0,
    time:['9:00~10:00','10:00~11:00','11:00~12:00','12:00~13:00','13:00~14:00','14:00~15:00','16:00~17:00']
  },
  f1:function(event){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }}
    })
  },
  bindPickerChange:function(e){
    console.log(e)
    this.setData({
      priceIndex: e.detail.value
    })
  },
  bindTimeChange:function(e){
    this.setData({
      timeIndex: e.detail.value
    })
  }
  


})