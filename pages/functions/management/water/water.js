Page({
  data: {
    "booklist":[
      { "BuildingNumber":"44",
        "RoomNumber":"308",
        "price":"18元",
        "time":"9:00-10:00"
      },
      {  
        "BuildingNumber":"43",
        "RoomNumber":"107",
        "price":"24元",
        "time":"10:00-11:00"
      },
      {  
        "BuildingNumber":"42",
        "RoomNumber":"308",
        "price":"18元",
        "time":"9:00-10:00"
      },
      {  
        "BuildingNumber":"41",
        "RoomNumber":"107",
        "price":"24元",
        "time":"10:00-11:00"
      }],
    price:['15元','18元','24元'],
    time:['9:00~10:00','10:00~11:00','11:00~12:00','12:00~13:00','13:00~14:00','14:00~15:00','16:00~17:00'],
    TeacherRoom:[
      '11号楼','12号楼','13号楼','14号楼'
    ],
    GrilRoom:[
      '21号楼','22号楼','23号楼'
    ],
    BoyRoom:[
      '31号楼','32号楼','33号楼',
    ],
    // 下拉菜单
    first: '楼号',
    second: '时间',
    thirds: '售价'
  },
  isShow: true,
  currentTab: 0,
 
  // 下拉切换
  hideNav: function () {
    this.setData({
      displays: "none"
    })
  },
    // 区域
  tabNav: function (e) {
    this.setData({
      displays: "block"
    })
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
 
      var showMode = e.target.dataset.current == 0;
 
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  // 下拉切换中的切换
  // 区域
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true
    })
  },
  // 下拉菜单1 2 3 
    // 区域1
  clickSum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _sum: e.target.dataset.num
    })
    this.setData({
      first: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {
 
  },

  // 2
  clickNum: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _num: e.target.dataset.num
    })
    this.setData({
      second: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
    var text = this.data.name
    console.log(text)
  },
  onLoad: function (options) {
 
  },
  // 3
  clickHouse: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      _res: e.target.dataset.num
    })
    this.setData({
      thirds: e.target.dataset.name
    })
    this.setData({
      displays: "none"
    })
  },

  onLoad: function (options) {
  }
 
  
})

