Page({
  data:{
    "secondHandBannerList":[
      {
        "imagePath":"/images/banner/banner-sh.png"
      },
      {
        "imagePath":"/images/banner/sky.jpg"
      },
      {
        "imagePath":"/images/banner/shakehands.jpg"
      },
      {
        "imagePath":"/images/banner/person.jpg"
      },
      {
        "imagePath":"/images/banner/office.jpg"
      }
    ],
    "reclaimBannerList":[
      {
        "imagePath":"/images/banner/banner-shiwu.png"
      },
      {
        "imagePath":"/images/banner/shakehands.jpg"
      },
      {
        "imagePath":"/images/banner/person.jpg"
      },
      {
        "imagePath":"/images/banner/office.jpg"
      }
    ],
    "secondHandItemList":[
      {
        "imagePath":"/images/secondHandItems/cap.jpg",
        "title1":"￥50",
        "title2":"95新可爱茶具"
      },
      {
        "imagePath":"/images//secondHandItems/chair.jpg",
        "title1":"￥230",
        "title2":"自用99新家用靠椅"
      },
      {
        "imagePath":"/images/secondHandItems/shoes.jpg",
        "title1":"￥175",
        "title2":"95新女生自穿时尚跑鞋"
      },
      {
        "imagePath":"/images/secondHandItems/shoes2.jpg",
        "title1":"￥300",
        "title2":"男生自穿匡威特价出售"
      },
      {
        "imagePath":"/images/secondHandItems/toy.jpg",
        "title1":"￥120",
        "title2":"可爱玩偶5只打包"
      }
    ],
    "reclaimItemList":[
      {
        "imagePath":"/images/reclaimItems/airpods.jpg",
        "title2":"捡到白色无套airpods整体",
        "title1":"1天前",
        "tags":[
          "四教"
        ]
      },
      {
        "imagePath":"/images/reclaimItems/bags.jpg",
        "title1":"2天前",
        "tags":[
          "4A105"
        ],
        "title2":"捡到黑色香奈儿包包一个"
      },
      {
        "imagePath":"/images/reclaimItems/book.jpg",
        "title1":"2天前",
        "tags":[
          "五教",
          "三楼走廊"
        ],
        "title2":"捡到计算机能力大全"
      },
      {
        "imagePath":"/images/reclaimItems/wallet.jpg",
        "title1":"2天前",
        "tags":[
          "4A105"
        ],
        "title2":"四教看到灰色钱包"
      }
    ],
      "forHelpList":[
        {
          "imagePath":"/images/reclaimItems/airpods.jpg",
          "title2":"寻找白色无套airpods整体",
          "title1":"1天前",
          "tags":[
            "四教"
          ]
        },
        {
          "imagePath":"/images/reclaimItems/bags.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"寻找黑色香奈儿包包一个"
        },
        {
          "imagePath":"/images/reclaimItems/book.jpg",
          "title1":"2天前",
          "tags":[
            "五教",
            "三楼走廊"
          ],
          "title2":"寻找丢失的计算机能力大全"
        },
        {
          "imagePath":"/images/reclaimItems/wallet.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"本人遗失灰色钱包一个如图所示"
        },
        {
          "imagePath":"/images/reclaimItems/airpods.jpg",
          "title2":"捡到白色无套airpods整体",
          "title1":"1天前",
          "tags":[
            "四教"
          ]
        },
        {
          "imagePath":"/images/reclaimItems/bags.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"捡到黑色香奈儿包包一个"
        },
        {
          "imagePath":"/images/reclaimItems/book.jpg",
          "title1":"2天前",
          "tags":[
            "五教",
            "三楼走廊"
          ],
          "title2":"寻找丢失的计算机能力大全"
        },
        {
          "imagePath":"/images/reclaimItems/wallet.jpg",
          "title1":"2天前",
          "tags":[
            "4A105"
          ],
          "title2":"本人遗失灰色钱包一个如图所示"
        }
    ]
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