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
    
  }
})