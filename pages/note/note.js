// pages/note/note.js
var app = getApp()
Page({
  data: {
    list: [{
      id: 1,
      name: '',
      count: 1
    }, {
      id: 2,
      name: '',
      count: 6
    }, {
      id: 3,
      name: '',
      count: 12
    }]
  },

  //向后增加数据
  add_after: function () {
    var newarray = [{
      id: 5,
      name:'',
      count: 89
    }];
    this.setData({
      'list': this.data.list.concat(newarray)
    });
  },

inputnote:function(e){
  var dataset = e.target.dataset;
  var index = dataset.index; //拿到是第几个数组(这里是模仿删除的写的。。。应该能拿到下标吧)
  this.data.list[index].name = e.detail.value;
  this.setData({
    list: this.data.list
  })
},

  //删除
  remove: function (e) {
    var dataset = e.target.dataset;
    var Index = dataset.index; //拿到是第几个数组
    this.data.list.splice(Index, 1);
    this.setData({
      list: this.data.list
    });
  },

  //清空
  clear: function () {
    this.setData({
      list: []
    });
  }

})
