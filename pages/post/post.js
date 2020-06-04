const path="cloud://text1-ig7qz.7465-text1-ig7qz-1302316905"
Page({
  data:{
    typeText:'',
    htmlContext:'<p>正版日式烟灰简约茶壶茶具套装 家用禅意功夫陶瓷茶杯茶盘礼盒装</p><p>女生自用</p><img style="width:300px" src="https://img.alicdn.com/imgextra/i1/2085677508/O1CN0125Ki7nJ4gq1LFT0_!!2085677508.jpg"/><p>联系方式wx:</p><img src="https://i0.hdslb.com/bfs/album/9d38a49cfbce59c1bb0f6c3d29ec5b6499eaaf39.png"/>',
    headPath:path + "/images/head/head.jpg"

  },
  onLoad:function(option){
    this.setData({
      type : option.type,
      title1 : option.title1,
      id : option.id,
      title2 : option.title2
    })
    if(this.data.type == 0){
      this.data.typeText='闲置二手'
    }else if(this.data.type == 1){
      this.data.typeText='失物招领'
    }else{
      this.data.typeText='请求寻物'
    }
    wx.setNavigationBarTitle({
      title: this.data.typeText+'详情',
    })
  }
})