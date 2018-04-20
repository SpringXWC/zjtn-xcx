// components/header/header.js
Component({

  /**
   * 组件的初始数据
   */
  data: {
    hid:false,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    close(){
      this.setData({
        hid:true
      })
    }
  }
})
