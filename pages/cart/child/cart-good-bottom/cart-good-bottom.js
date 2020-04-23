// pages/cart/child/cart-good-bottom/cart-good-bottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isAllChecked:{
      type:Boolean,
      value:true
    },
    totalPrice:{
      type:Number,
      value:0
    },
    counts:{
      type:Number,
      value:0
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
    selectAllClick(){
      this.triggerEvent("selectAllClick")
    }
  }
})
