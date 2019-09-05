// 云函数入口文件
const cloud = require("wx-server-sdk")

cloud.init()
// 获取数据库
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const MAX_LIMIT = 1
  // 获取数据库内 todos 集合的记录总数的对象
  const totalObj = await db.collection("todos").count()
  // 集合的记录总数的对象下有一个 total 属性值得就是 记录的总数
  const { total } = totalObj
  // 每次取100 个  需取多少次
  const cishu = Math.ceil(total / MAX_LIMIT)
  // 发送多个请求等全部请求结束之后把所有的返回值合并到一个数组内
  // 由于需要发送很多请求，所以需要使用 Promise.all([数组内放很多的promise(也就是很多的请求)])
  // tasks 很多请求的数组
  const tasks = []
  // for 创建多少个请求放到 tasks 数组内
  for (let i = 0; i < cishu; i++) {
    tasks.push(
      db
        .collection("todos")
        .skip(i * MAX_LIMIT)
        .limit(MAX_LIMIT)
        .get()
    )
  }
  // 使用 Promise.all() 把所有的请求发出，全部成功之后拿到返回值
  const res = await Promise.all(tasks)
  const todos = res.reduce((result, item) => result.concat(item.data), [])
  //  res 的结果
  // const obj = [
  //   {
  //     data: [{ todo },{todo}]
  //   },
  //   {
  //     data: [{ todo }]
  //   }
  // ]
  // await 会等异步请求结束之后 在给变量赋值

  // result 拿到的结果和我们请求成功拿到的是一样的
  return {
    todos
  }
}

// 一个函数存在异步操作 而且该函数需要获取异步的结果作为自己的返回值
// 所以 return 必须在异步执行完毕之后执行
// 所以需要用到异步的解决方案  async  await
// 函数声明的时候前面加上  async 关键字,在函数内部的异步操作前加上 await 此操作就类似变成了 同步操作,那么异步后的同步就在异步操作之后执行了
