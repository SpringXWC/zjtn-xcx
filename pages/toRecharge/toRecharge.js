// pages/toRecharge/toRecharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:false,
    select: '选择',
    list:[
      { money: '1000', send: '100', },
      { money: '1000', send: '100',  },
      { money: '1000', send: '100', },
    ],
    payment:[
      { iconImg: 'wechat', text: '微信支付', },
      { iconImg: 'alipay', text: '支付宝支付', },
    ],
    showAmountModal: {
      showModal: 'hideModal',
      showMask: 'hideMask',
    },

  },
  showAmountModal: function (e) {
    var that = this;
    that.setData({
      showAmountModal: {
        showModal: 'showModal',
        showMask: 'showMask',
      }
    })
  },
  hideAmountModal: function (e) {
    var that = this;
    that.setData({
      showAmountModal: {
        showModal: 'hideModal',
        showMask: 'hideMask',
      },
    })
  },
  // 已选择
  selected:function(){
   
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



