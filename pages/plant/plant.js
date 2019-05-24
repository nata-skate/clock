Page({
  data: {
    counting: false,
    clock_minute: 0,
    clock_second: 0,
  },

  clock_timeInput: function (e) //用于获取用户输入的时间，获取后储存到clock_time
  {
    this.setData({
      clock_minute: e.detail.value,
      counting:false,
      clock_second: 0,
    });
  },

  countdown: function () {
    var that = this;
    var time = this.data.clock_minute;
    if (!that.data.counting) {
      countDown(that, time * 60);
    }
  }
})

function countDown(that, count) {//count就是初始的minute
  if (count == 0) {
    that.setData({
      clock_minute: '计时结束',
      clock_second: ' ',
      counting: false
    })
    return;
  }
  that.setData({
    counting: true,
  })

  setTimeout(function () {
    fromattime(that, count);//把count变成标准形式
    count--;
    countDown(that, count);
  }, 1000);
}

export function fromattime(that, time) { //假设time是传进来的秒数。可以吗？
  let seconds = time;
  let minutes = 0;
  if (time) {
    if (seconds > 59) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      that.setData({
        clock_minute: minutes,//这里可以成功赋值吗
        clock_second: seconds
      })
    }
  }
}