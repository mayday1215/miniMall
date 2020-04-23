// pages/cart/child/cart-good-list/cart-good-list.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartArr:{
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
   
    selectCheck(e){
      this.triggerEvent("selectClick",e.currentTarget.dataset.iid)
    }
  },
 
})
