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
      console.log(event)
      var type=event.currentTarget.dataset.type
      var title=event.currentTarget.dataset.title
      var id=event.currentTarget.dataset.itemId
      wx.navigateTo({
        url: '/pages/post/post?type='+type+'&title='+title+'&id='+id
      })
    }
  }
})