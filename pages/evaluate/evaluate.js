// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag:true,
    current:'',
    stars:[
      { iconImg:'star',index:'1'},
      { iconImg: 'star',index:'2' },
      { iconImg: 'star', index: '3' },
      { iconImg: 'star', index: '4' },
      { iconImg: 'star', index: '5' },
    ]
  },
  selectStar: function (e) {
    var index = e.currentTarget.dataset.index; // 获取当前点击的是第几颗星星
    var tempStars = this.data.stars; // 暂存星星数组
    for (var i = 0; i < tempStars.length; i++) {
      if (i <= index) { // 小于等于index的是满心
        tempStars[i] = 'selectStar'
      } else { // 其他是空心
        tempStars[i].class = 'star'
      }
    }
    // 重新赋值就可以显示了
    this.setData({
      stars: tempStars
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})