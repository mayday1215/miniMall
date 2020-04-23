// pages/home/child/home-goods/home-goods.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goProductInfo(event){
      const iid = event.currentTarget.dataset.iid
      wx.navigateTo({
        url: '/pages/productInfo/productInfo?iid='+iid,
      })
    }
  }
})
