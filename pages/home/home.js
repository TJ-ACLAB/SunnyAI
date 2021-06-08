// pages/home/home.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 100,
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
    },
    defaultUserHead: '/assets/default-user.png',
    userInfo: {
      avatarUrl: '',
      nickName: 'lovely',
      integral: 0
    },
    integralInfo: {
      accumulateDay: 0,
      persistentDay: 0
    },
    count: 0,//累计打卡
    maxContinue: 0,//连续打卡
    count_users:0,//参与人数
    record_times:0,//打卡次数
    rankHeads: [
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132',
      'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ergeibviaCPEVjC7ykicnk0jcOQNNIqCpJNQxeiaic23Fqun0KjorTdvAcNnTmYKnic9orqC5nQUoAZTsqw/132'
    ],
    isClock: false//控制是否打卡
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
    wx.request({
      url: app.globalData.oldurl + '/search_record?id=' + app.globalData.user_id,
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log(result.data),
       //console.log(result.data.data.count)
        this.setData({
          count: result.data.data.count,
          maxContinue: result.data.data.maxContinue
        })
      },
      fail: () => { console.log("查询打卡记录  error") },
      complete: () => { }
    });
    wx.request({
      url: app.globalData.oldurl + '/find_all_user',
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        //console.log(result.data),
        this.setData({
           count_users:result.data.data
        })
      },
      fail: () => { console.log("查询打卡记录  error") },
      complete: () => { }
    });
    wx.request({
      url: app.globalData.oldurl + '/find_all_record',
      header: { 'content-type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        //console.log(result.data),
       //console.log(result.data)
        this.setData({
            record_times:result.data.data
        })
      },
      fail: () => { console.log("查询打卡记录  error") },
      complete: () => { }
    });
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

  },
  onGetUserProfile() {
   wx.navigateTo({
     url:'/pages/records/records'
   })
  },
  goRank() {
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },
  goStatement() {
    wx.navigateTo({
      url: '/pages/statement/statement',
    })
  }
})