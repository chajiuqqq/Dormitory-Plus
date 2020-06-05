const path=getApp().globalData.envPath
Component({
  data:{
    thumbBefore:path + "/images/icons/notSelected/thumb.png",
    favourBefore:path + "/images/icons/notSelected/favour.png",
    thumbAfter:path + "/images/icons/selected/thumb-after.png",
    favourAfter:path + "/images/icons/selected/favour-after.png",
    thumbFlag:false,
    favourFlag:false
  },
  attached:function(){
      this.setData({
        thumbPath:this.data.thumbBefore,
        favourPath:this.data.favourBefore
      })
  },
  methods:{
    click:function(e){
        var type = e.currentTarget.dataset.type
        if(type == 0){
          this.setData({
            thumbPath:this.data.thumbFlag?this.data.thumbBefore:this.data.thumbAfter
          })
          this.data.thumbFlag=!this.data.thumbFlag
        }else{
          this.setData({
           favourPath:this.data.favourFlag?this.data.favourBefore:this.data.favourAfter
          })
          this.data.favourFlag=!this.data.favourFlag
        }
    }
  }
})