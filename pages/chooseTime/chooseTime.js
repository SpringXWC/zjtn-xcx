const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}


Page({
  data:{
     shop:'',
     years: years,
     year: date.getFullYear(),
     months: months,
     month: 2,
     days: days,
     day: 2,
     value: [9999, 1, 1]
  },
  onLoad: function (options){
    console.log(options.shop)
    this.setData({
      shop: options.shop
    })
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})