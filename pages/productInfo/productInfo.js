// pages/productInfo/productInfo.js
import {request} from "../../netwrok/request.js"
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    productId:null,
    swiperArr:[], //轮播图数组图片
    productInfo:{},//商品信息
    productShop:{},//商家信息
    productImgArr:[], //图片展示数据
    productParams:{}, //商品参数
    addCartData:{} //加入购物车的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log()
    // app.globalData.cart = 3
    // console.log(app)
    this.setData({
      productId:options.iid
    })
    this.getProductInfoData()
  },
  getProductInfoData(){
    request({
      url:'/detail',
      method:"get",
      data:{
        // iid:'1m70y5k'
        iid:this.data.productId
      }
    }).then(res => {
      const data = res.data.result
      console.log(data)
      //给轮播图数组赋值
      this.setData({
        swiperArr:data.itemInfo.topImages
      })
      //商品信息赋值
      // title:'',//商品标题
      // newPrice:'',//新价格
      // oldPrice:'',//旧价格
      // discountDesc:'',//折扣
      // columns:'',//销量等到
      // services:'',//服务相关
      let productObj = {
        title:data.itemInfo.title,
        newPrice:data.itemInfo.price,
        oldPrice:data.itemInfo.oldPrice,
        discountDesc:data.itemInfo.discountDesc,
        columns:data.columns,
        services:data.shopInfo.services,
        desc:data.itemInfo.desc,
        lowPrice:data.itemInfo.lowPrice
      }
      //赋值商家信息
      // logo: '', //头像
      // name: '', //名字
      // fans:'', //粉丝
      // sells:'', //总销量
      // score:'', //评分
      // goodsCount:'', //商品数量
      // shopUrl:'' //店铺链接
      let productShopObj = {
        logo:data.shopInfo.shopLogo,
        name:data.shopInfo.name,
        fans:data.shopInfo.cFans,
        sells:data.shopInfo.cSells,
        score:data.shopInfo.score,
        goodsCount:data.shopInfo.cGoods,
        shopUrl:data.shopInfo.shopUrl
      }
      //图片展示数据
      let imgs = data.detailInfo.detailImage[0].list

      //商品参数展示
      let proParams = {
        info:data.itemParams.info.set,
        rule:data.itemParams.rule.tables[0]
      }



      this.setData({
        productInfo:productObj,
        productShop:productShopObj,
        productImgArr:imgs,
        productParams:proParams
      })
    })
   
  },
  //加入购物车
  addCart(){
    //获取到购物车的数据
    let addCartData = {
      img:this.data.swiperArr[0],  //购物车图片
      title:this.data.productInfo.title, //购物车标题
      desc:this.data.productInfo.desc, //购物车描述
      price:this.data.productInfo.lowPrice, //购物车价格
      iid:this.data.productId, //购物车id
      count:1, //购物车数量
      isChecked:true //是否选中
    }
    console.log(app.globalData.cart)
    //全局的购物车
    const cartArr = app.globalData.cart
    if(cartArr.length <= 0){
      cartArr.push(addCartData)
      return
    }
    for(let i = 0; i < cartArr.length;i++){
      if(cartArr[i].iid === this.data.productId){
        cartArr[i].count++
        return
      }
    }
    cartArr.push(addCartData)

    
    
  }
})