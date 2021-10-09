// pages/result/result.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        q: Math.ceil(Math.random()*6),
        w: Math.ceil(Math.random()*6),
        e: Math.ceil(Math.random()*6),
        r: Math.ceil(Math.random()*6),
        t: Math.ceil(Math.random()*6),
        y: Math.ceil(Math.random()*6),
        },
    togoto(){
        wx.navigateTo({
          url: '/pages/SinglePlayer3/SinglePlayer3',
        })
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