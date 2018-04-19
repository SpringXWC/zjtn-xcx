// pages/weChat/weChat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    residueMoney:'1200.00',
    list:[
      { img: "expenditure", text: "消费记录", back: 'arrow-right', url:'../expenditure/expenditure'},
      { img: "recharge", text: "充值记录", back: 'arrow-right', url: '../recharge/recharge'},
      { img: "cashcoupon", text: "我的代金券", back: 'arrow-right', url:'../cashcoupon/cashcoupon'},
    ]
  },
  //跳转会员规则
  toRulePage:function(){
    wx.navigateTo({
      url:'../membership/membership'
    })
  },
  //跳转充值页面
  toRecharge: function () {
    wx.navigateTo({
      url: '../toRecharge/toRecharge'
    })
  },
  //跳转消费记录页面
  toList:function(){

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