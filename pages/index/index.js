Page({
  data: {
    dataList: [
      {
        'id': 0,
        'cover': '../../assets/imgs/1.png',
        'shop': '蛇口店',
        'area': '南山区',
        'address': '南山区蛇口工业',
        'num': '506',
        'long': '50km',
        'longitude': '116.3971400000',
        'latitude': '39.9179400000'
      },
      {
        'id': 1,
        'cover': '../../assets/imgs/2.png',
        'shop': '南山店',
        'area': '南山区',
        'address': '南山区蛇口工业五路万维大厦',
        'num': '506',
        'long': '50km',
        'longitude': '113.9460900000',
        'latitude': '22.5435700000'
      },
      {
        'id': 2,
        'cover': '../../assets/imgs/1.png',
        'shop': '深圳蛇口店',
        'area': '南山区',
        'address': '南山区蛇口工业五路万维大厦',
        'num': '506',
        'long': '50km',
        'longitude': '116.3971400000',
        'latitude': '39.9179400000'
      },
      {
        'id': 3,
        'cover': '../../assets/imgs/2.png',
        'shop': '深圳蛇口店',
        'area': '南山区',
        'address': '南山区蛇口工业五路万维大厦',
        'num': '506',
        'long': '50km',
        'longitude': '116.3971400000',
        'latitude': '39.9179400000'
      },
      {
        'id': 4,
        'cover': '../../assets/imgs/1.png',
        'shop': '深圳蛇口店',
        'area': '南山区',
        'address': '南山区蛇口工业五路万维大厦',
        'num': '506',
        'long': '50km',
        'longitude': '116.3971400000',
        'latitude': '39.9179400000'
      },
      {
        'id': 5,
        'cover': '../../assets/imgs/2.png',
        'shop': '深圳蛇口店',
        'area': '南山区',
        'address': '南山区蛇口工业五路万维大厦',
        'num': '506',
        'long': '50km',
        'longitude': '116.3971400000',
        'latitude': '39.9179400000'
      }


    ],
    showHide: false,
    hidden: false,
    scroll: true,
    List: ['深圳市', '广州市', '珠海市', '湛江市', '梅州市']

  },
  pushTo: function (e) {
    var p = e.currentTarget.id;
    var longitude = this.data.dataList[p].longitude;
    var latitude = this.data.dataList[p].latitude;
    console.log(longitude)
    console.log(latitude)
    wx.navigateTo({
      url: '../map/map?longitude=' + longitude + '&latitude=' + latitude + '',

      success: function (res) {

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  refresh: function (e) {
    var tem = this.data.showHide
    console.log(!this.data.showHide)
    console.log(tem)
    this.setData({
      showHide: !tem,
      hidden: !this.data.hidden,
      scroll: !this.data.scroll
    })
  },
  pushToNext:function(e){
    console.log(1111)
    var p = e.currentTarget.id;
    var shop = this.data.dataList[p].shop
    console.log(p)
    wx.navigateTo({
      url: '../chooseTime/chooseTime?shop=' + shop +'',
    })
  }

})