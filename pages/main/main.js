const path=getApp().globalData.envPath
Page({
  data:{
    "secondHandBannerList":[
      {
        "imagePath":path + "/images/banner/banner-sh.png"
      },
      {
        "imagePath":path + "/images/banner/banner1.jpg"
      },
      {
        "imagePath":path + "/images/banner/banner2.jpg"
      },
      {
        "imagePath":path + "/images/banner/banner3.jpg"
      },
      {
        "imagePath":path + "/images/banner/banner4.jpg"
      }
    ],
    "reclaimBannerList":[
      {
        "imagePath":path + "/images/banner/banner-lost.png"
      },
      {
        "imagePath":path + "/images/banner/banner2.jpg"
      },
      {
        "imagePath":path + "/images/banner/banner5.jpg"
      },
      {
        "imagePath":path + "/images/banner/banner6.jpg"
      }
    ],
    "secondHandItemList":[
      {
        "imagePath":path + "/images/showedItemImages/cap.jpg",
        "title1":"50",
        "title2":"95新可爱茶具",
        "id":1234
      },
      {
        "imagePath":path + "/images/showedItemImages/chair.jpg",
        "title1":"230",
        "title2":"自用99新家用靠椅",
        "id":1235
      },
      {
        "imagePath":path + "/images/showedItemImages/shoes.jpg",
        "title1":"175",
        "title2":"95新女生自穿时尚跑鞋",
        "id":1236
      },
      {
        "imagePath":path + "/images/showedItemImages/shoes2.jpg",
        "title1":"300",
        "title2":"男生自穿匡威特价出售",
        "id":1237
      },
      {
        "imagePath":path + "/images/showedItemImages/toy.jpg",
        "title1":"120",
        "title2":"可爱玩偶5只打包",
        "id":1238
      }
    ],
    "reclaimItemList":[
      {
        "imagePath":path + "/images/showedItemImages/airpods.jpg",
        "title2":"捡到白色无套airpods整体",
        "title1":"1天前",
        "tags":[
          "四教"
        ],
        "id":12
      },
      {
        "imagePath":path + "/images/showedItemImages/bags.jpg",
        "title1":"2天前",
        "tags":[
          "4A105"
        ],
        "title2":"捡到黑色香奈儿包包一个",
        "id":13
      },
      {
        "imagePath":path + "/images/showedItemImages/book.jpg",
        "title1":"2天前",
        "tags":[
          "五教",
          "三楼走廊"
        ],
        "title2":"捡到计算机能力大全",
        "id":14
      },
      {
        "imagePath":path + "/images/showedItemImages/wallet.jpg",
        "title1":"2天前",
        "tags":[
          "4A105"
        ],
        "title2":"四教看到灰色钱包",
        "id":15
      }
    ],
      "forHelpList":[
        {
          "imagePath":path + "/images/showedItemImages/airpods.jpg",
          "title2":"寻找白色无套airpods整体",
          "title1":"1天前",
          "tags":[
            "四教"
          ]
        },
        {
          "imagePath":path + "/images/showedItemImages/bags.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"寻找黑色香奈儿包包一个"
        },
        {
          "imagePath":path + "/images/showedItemImages/book.jpg",
          "title1":"2天前",
          "tags":[
            "五教",
            "三楼走廊"
          ],
          "title2":"寻找丢失的计算机能力大全"
        },
        {
          "imagePath":path + "/images/showedItemImages/wallet.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"本人遗失灰色钱包一个如图所示"
        },
        {
          "imagePath":path + "/images/showedItemImages/airpods.jpg",
          "title2":"捡到白色无套airpods整体",
          "title1":"1天前",
          "tags":[
            "四教"
          ]
        },
        {
          "imagePath":path + "/images/showedItemImages/bags.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"捡到黑色香奈儿包包一个"
        },
        {
          "imagePath":path + "/images/showedItemImages/book.jpg",
          "title1":"2天前",
          "tags":[
            "五教",
            "三楼走廊"
          ],
          "title2":"寻找丢失的计算机能力大全"
        },
        {
          "imagePath":path + "/images/showedItemImages/wallet.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"本人遗失灰色钱包一个如图所示"
        }
    ],
    locIconPath:path + "/images/icons/position.png",
    schoolName:"上海师范大学"
  },
  onLoad:function(){
    this.setData({
      tab: 0
    })
  },
  tab_slide: function (e) {//滑动切换tab 
    var that = this;
    that.setData({ tab: e.detail.current });
  },
  tab_click: function (e) {//点击tab切换
    var that = this;
    if (that.data.tab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: e.target.dataset.current
      })
    }
  }
  
})