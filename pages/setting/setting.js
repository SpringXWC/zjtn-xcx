// pages/setting/setting.js
const util = require('../../utils/util.js')
const md5 = require('../../utils/md5.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {},

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
    let obj = {
      "Query": {"LoginName": "15013536281"},
      "BaseData": {"IP": "192.168.1.73", "OS": 2, "Sign": "f02937a9a92f29748134a4d7a59db7c0", "Token": ""}
    }
    let str = util.paramComputeMD5(obj,'9ol.)P:?3edc$RFV5tgb')
    console.log(md5(str),obj.BaseData.Sign)
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