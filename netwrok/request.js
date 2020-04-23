export function request(config){
  // const baseUrl = "http://152.136.185.210:8000/api/h8"
  // const baseUrl = "http://123.207.32.32:8000/api/h8"
  const baseUrl = "http://106.54.54.237:8000/api/h8"
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl+config.url,
      method:config.method || "get",
      data:config.data || {},
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
 



}