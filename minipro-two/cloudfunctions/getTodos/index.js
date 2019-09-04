// 云函数入口文件
const cloud = require("wx-server-sdk")

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  // 需要向数据库内获取数据
  const db = wx.cloud.database()
  // await 会等异步请求结束之后 在给变量赋值
  const result = await db.collection("todos").get()
  return {
    res: result
  }
}
