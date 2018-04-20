// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag:true,
    evaluate:'',
    disabled:true,
    current:0,
    stars:[
      { iconImg:'star',index:1},
      { iconImg: 'star',index:2 },
      { iconImg: 'star', index: 3 },
      { iconImg: 'star', index: 4 },
      { iconImg: 'star', index: 5 },
    ]
  },
  // 选择星星
  selectStar: function (e) {
    var item = e.currentTarget.dataset.index;
    if (this.data.current == item ){
      item = item-1;
    }
    this.setData({
      current: item,
      disabled:false
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