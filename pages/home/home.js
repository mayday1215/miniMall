// pages/home/home.js
import {request} from "./../../netwrok/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowBackTop:false,
    tabControlType:'pop',
    bannerList:[],
    recommendList:[],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}  
    }
  },

  // 请求轮播图和推荐数据
  _getBannersAndRecommend(){
    request({
      url:'/home/multidata'
    }).then(res => {
    this.setData({
      bannerList:res.data.data.banner.list,
      recommendList:res.data.data.recommend.list
    })
    })
  },

  //请求商品数据
  getGoods(type){
    let page = this.data.goods[type].page
    page++
    request({
      url:"/home/data",
      method:'get',
      data:{
        type:type,
        page:page
      }
    }).then(res => {
      const goodsList = res.data.data.list
       const newGoods = this.data.goods[type].list.concat(goodsList)
       const typeList = `goods.${type}.list`
       const goodsPage = `goods.${type}.page`
      this.setData({
        [typeList]:newGoods,
        [goodsPage]:page
      })
      

    })
  },
  //获取tabCon的index
  tabConIndex(event){
    let type = ''
    switch(event.detail){
      case 0:
        type='pop'
        break
      case 1:
        type="new"
        break
      case 2:
        type="sell"
        break
    }
    this.setData({
     tabControlType:type
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this._getBannersAndRecommend()
    //请求商品
    this.getGoods("pop")
    this.getGoods("new")
    this.getGoods("sell")
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   this.getGoods(this.data.tabControlType)
  },
  onPageScroll(options){
      this.setData({
        isShowBackTop:options.scrollTop >= 1500
      })
  },
})