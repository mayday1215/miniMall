// pages/home/child/home-tab-control/home-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    controlList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClcik(e){
      this.setData({
        activeIndex:e.currentTarget.dataset.index
      })
      this.triggerEvent("tabConIndex",e.currentTarget.dataset.index)
    }

   


  }
})
