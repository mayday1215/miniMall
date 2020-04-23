// pages/cart/cart.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartArr:[],
    isAllChecked:true,
    totalPrice:0,
    counts:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:  function(options) {
   
    let selectAll = app.globalData.cart.every(item => {
      return item.isChecked 
    })
    this.setData({
      isAllChecked:selectAll
    })
    
  },
  onShow(){
    this.setData({
      cartArr:app.globalData.cart
    })
    this.changeData()
  },
  //点击是否选中
  selectClick(o){
    let id = o.detail
    // let cart = 
    this.data.cartArr.forEach(item => {
      if(item.iid === id){
        item.isChecked = !item.isChecked
      }
    })
    this.setData({
      cartArr:this.data.cartArr
    })
    let selectAll = app.globalData.cart.every(item => {
      return item.isChecked 
    })
    this.setData({
      isAllChecked:selectAll
    })
    this.changeData()
  },
  //点击全选
  selectAllClick(){
    if(this.data.isAllChecked){
      //目前选中点击应该是补选中
      this.data.cartArr.forEach(item => {
        item.isChecked = false
      })
      this.setData({
        isAllChecked:false,
        cartArr:this.data.cartArr
      })
    }else{
      //目前不选中点击应该是全选中
      this.data.cartArr.forEach(item => {
        item.isChecked = true
      })
      this.setData({
        isAllChecked:true,
        cartArr:this.data.cartArr
      })
    }
    this.changeData()
  },
  changeData(){
    let totalPrice = 0
    let counts = 0
    this.data.cartArr.forEach(item => {
      if(item.isChecked){
        totalPrice += item.price * item.count
        counts++
      }
      
    })
    this.setData({
      totalPrice:totalPrice,
      counts:counts
    })
 
  }


})