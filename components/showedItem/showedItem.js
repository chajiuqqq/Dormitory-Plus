Component({
  properties:{
    showedItemList:{
      type:Array,
      value:[]
    },
    type:{
      type:Number,
      value:0
    }
  },
  data:{

  },
  attached:function(){
    console.log("attached")
  },
  detached:function() {
    
  },
  methods:{
    "navigateTo":function(event){
      var showedItem=event.currentTarget.dataset.showedItem
      var title2=showedItem.title2
      var id=showedItem.itemId
      var title1 = showedItem.title1
      wx.navigateTo({
        url: '/pages/post/post?type='+this.data.type+'&title1='+ title1 +'&id='+ id + '&title2=' + title2
      })
    }
  }
})