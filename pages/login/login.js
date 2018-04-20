// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //时候显示倒计时
    countDown: false,
    //倒计时时长
    COUNTDOWNTIME: 10,
    //当前倒计时
    countDownTime: 0,
    //能否提交
    canSubmit: false,

    authCode: "",
    phone: ""
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  formInput(e) {
    let currType = e.currentTarget.dataset.type
    let obj = {}
    obj[currType] = e.detail.value
    this.setData(obj)
    this.formValidate(false)
  },
  /**
   * 表单验证
   */
  formValidate(e) {
    let flag = false
    let errmsg = ""
    let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
    if (!this.data.phone || !this.data.authCode) {
      flag = false
    } else {
      if (reg.test(this.data.phone)) {

        if (this.data.authCode.length === 4) {
          flag = true
        } else {
          errmsg = "验证码长度错误"
        }
      } else {
        errmsg = '手机号码格式错误'
      }
      if (!flag && !!e) {
        wx.showToast({
          title: errmsg,
          icon: 'none',
          duration: 2000
        })
      }
    }
    this.setData({
      canSubmit: flag
    })
  },
  /**
   * 提交的表单
   * @param e
   */
  submit(e, msg) {
    console.log(e.detail.value, msg)
  },
  /**
   * 获取验证码
   */
  getAuthCode: function () {
    this.setData({
      countDown: true,
      countDownTime: this.data.COUNTDOWNTIME
    })

    let timer = setInterval(() => {

      this.setData({
        countDownTime: this.data.countDownTime - 1
      })
      if (this.data.countDownTime < 0) {
        this.setData({
          countDown: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }
})