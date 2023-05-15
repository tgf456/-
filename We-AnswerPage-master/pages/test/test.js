// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    answer_ABCD: "未选择",
    real_answer: app.globalData.answer[0],
    real: "请先选择答案",
    show: false,
    accurate: 0,
    have_choose: false,
    questionDetail: app.globalData.question[0].question,
    answerA: app.globalData.question[0].option.A,
    answerB: app.globalData.question[0].option.B,
    answerC: app.globalData.question[0].option.C,
    answerD: app.globalData.question[0].option.D,
    list: [ 1, 2, 3, 4, 5, 6, 7, 8, 9],
    listABCD : ["A","B","C","D"]
  },

  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },

  setList: function () {
    var newList = this.data.list.sort(this.randSort);
    this.setData({
      list: newList,
    });
  },

  setABC : function(){
    var abc = this.data.listABCD.sort(this.randSort);
    this.setData({
      listABCD: abc,
    });
  },

  setOption: function(){

  },

  ClickBefore: function() {
    this.setData({
      index: this.data.index - 1,
      realIndex: this.data.list[this.data.index%10],
      have_choose: false,
      show: false,
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABCD[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABCD[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABCD[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABCD[3]],
    })
  },

  ClickAfter: function() {
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index%10],
      have_choose: false,
      show: false,
    })
  
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
     
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABCD[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABCD[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABCD[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABCD[3]],
    })
    
  },

  LookAnswer: function() {
    if (this.data.have_choose==false) {
      this.setData({
        answer_ABCD: "未选择",
        real: "请先选择答案",
      })
    }
    this.setData({
      show: true,
    })
  },

  Submit: function() {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.accurate,
      })
  },

  answerClickA: function () {
    this.setData({
      answer_ABCD: "A",
      real_answer: app.globalData.answer[this.data.realIndex],
      have_choose: true,
    })
    if (this.data.listABCD[0] == this.data.real_answer) {
      this.setData({
        real: "A",
      })
    }
    if (this.data.listABCD[1] == this.data.real_answer) {
      this.setData({
       real: "B"
      })
    }
    if (this.data.listABCD[2] == this.data.real_answer) {
      this.setData({
        real: "C"
      })
    }
    if (this.data.listABCD[3] == this.data.real_answer) {
      this.setData({
        real: "D"
      })
    }
    if (this.data.real == this.data.answer_ABCD) {
      this.setData({
        accurate: this.data.accurate + 10
      })
    }
      
    
  },

  answerClickB: function () {
    this.setData({
      answer_ABCD: "B",
      real_answer: app.globalData.answer[this.data.realIndex],
      have_choose: true,
    })
    if (this.data.listABCD[0] == this.data.real_answer) {
      this.setData({
        real: "A",
      })
    }
    if (this.data.listABCD[1] == this.data.real_answer) {
      this.setData({
       real: "B"
      })
    }
    if (this.data.listABCD[2] == this.data.real_answer) {
      this.setData({
        real: "C"
      })
    }
    if (this.data.listABCD[3] == this.data.real_answer) {
      this.setData({
        real: "D"
      })
    }
    if (this.data.real == this.data.answer_ABCD) {
      this.setData({
        accurate: this.data.accurate + 10
      })
    }
    
  },

  answerClickC: function () {
    this.setData({
      answer_ABCD: "C",
      real_answer: app.globalData.answer[this.data.realIndex],
      have_choose: true,
    })
    if (this.data.listABCD[0] == this.data.real_answer) {
      this.setData({
        real: "A",
      })
    }
    if (this.data.listABCD[1] == this.data.real_answer) {
      this.setData({
       real: "B"
      })
    }
    if (this.data.listABCD[2] == this.data.real_answer) {
      this.setData({
        real: "C"
      })
    }
    if (this.data.listABCD[3] == this.data.real_answer) {
      this.setData({
        real: "D"
      })
    }
    if (this.data.real == this.data.answer_ABCD) {
      this.setData({
        accurate: this.data.accurate + 10
      })
    }
    
  },

  answerClickD: function () {
    this.setData({
      answer_ABCD: "D",
      real_answer: app.globalData.answer[this.data.realIndex],
      have_choose: true,
    })
    if (this.data.listABCD[0] == this.data.real_answer) {
      this.setData({
        real: "A",
      })
    }
    if (this.data.listABCD[1] == this.data.real_answer) {
      this.setData({
       real: "B"
      })
    }
    if (this.data.listABCD[2] == this.data.real_answer) {
      this.setData({
        real: "C"
      })
    }
    if (this.data.listABCD[3] == this.data.real_answer) {
      this.setData({
        real: "D"
      })
    }
    if (this.data.real == this.data.answer_ABCD) {
      this.setData({
        accurate: this.data.accurate + 10
      })
    }
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setList();
    this.setABC();
    this.setData({
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABCD[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABCD[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABCD[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABCD[3]],
    })
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