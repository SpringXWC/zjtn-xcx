// pages/toRecharge/toRecharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    selected:0,
    selectModes:0,

    list:[
      { index:1, money: '1000', send: '100', text: '选择', },
      { index: 2, money: '1000', send: '100', text: '选择' },
      { index: 3, money: '1000', send: '100', text: '选择' },
    ],
    payment:[
      { index: 1, iconImg: 'wechat', text: '微信支付', },
      { index: 2, iconImg: 'alipay', text: '支付宝支付', },
    ],
   
  },
  // 选择充值金额
  
  selected:function(e){
    this.setData({
      selected: e.currentTarget.dataset.index
    })
    this.select();
  },
  // 选择支付方式
  selectMode:function(e){
    this.setData({
      selectModes: e.currentTarget.dataset.index
    })
    this.select();
  },
  // 判断提交按钮是否禁用
  select:function(){
    if (this.data.selected > 0 && this.data.selectModes > 0){
      this.setData({
        disabled:false
      })
    }
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



