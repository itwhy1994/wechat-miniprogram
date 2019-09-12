Page({
  /**
   * 页面的初始数据
   */
  data: {
    strFunctionChooses: ["功能1", "功能2", "功能3"],
    iFunctionChoose: 0,
  },

  bindtapList: function (e) {
    var idTap = parseInt(e.currentTarget.id)
    if (this.data.iFunctionChoose == idTap) {
      this.setData({
        iFunctionChoose: 0
      })
    }
    else {
      this.setData({
        iFunctionChoose: idTap
      })

      if (idTap == 1) {
        // what you want when tap function 1
      }
      else if (idTap == 2) {
        // what you want when tap function 2
      }
      else if (idTap == 3) {
        // what you want when tap function 3
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
})
