export default {
  // 格式化日期为 yyyy/m/d
  dateFormate(param) {
    let date = typeof param === 'string' ? new Date(param.replace(/\-/g, '/')) : param;
    date = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    return date
  },
  // 获取某月的天数
  getMonthDay(param) {
    let y = param.getFullYear()
    let m = param.getMonth() + 1
    let d = new Date(y, m, 0).getDate()
    return d
  },

  // 当月要显示的上月天数
  getFirstDay(param) {
    let y = param.getFullYear()
    let m = param.getMonth()
    let d = new Date(y, m).getDay()
    if (d === 0) return 6
    return d - 1
  },

  // 获取上月边界日期
  getBeforeList(param) {
    let y = param.getFullYear()
    let preM = param.getMonth() - 1
    let list = this.getMonthList(new Date(y, preM))
    let num = this.getFirstDay(param)

    let s = list.length - num
    let r = list.slice(s)
    for (const item of r) {
      item.isCurrM = false
    }

    return  r
  },
  // 获取下月边界日期
  getAfterList(param) {
    let y = param.getFullYear()
    let preM = param.getMonth() + 1
    let list = this.getMonthList(new Date(y, preM))
    let num = 42 - this.getMonthDay(param) - this.getFirstDay(param)

    let r = list.slice(0, num)
    for (const item of r) {
      item.isCurrM = false
    }

    return  r
  },

  // 获取某月的渲染列表
  getMonthList(param) {
    let list = []
    let today = this.dateFormate(new Date()) //当日
    let nums = this.getMonthDay(param) //天数
    let year = param.getFullYear() // 年
    let month = param.getMonth() + 1 // 月

    for (let i = 0; i < nums; i++) {
      let time = `${year}/${month}/${i+1}`
      list.push({
        num: i + 1,
        date: time,
        isToday: time === today,
        isCurrM: true,
        selected: false,
      })
    }
    return list
  },

  //获取要渲染的列表
  getList(param) {
    let list = [...this.getBeforeList(param), ...this.getMonthList(param), ...this.getAfterList(param)]
    return list
  }
}