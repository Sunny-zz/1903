### 制作设计需求单小程序

#### 实现的功能

##### 提需求 输入需求,输完之后点击提交直接跳到预览页

##### 我的需求页 ( 列表页 功能: 预览 删除 编辑 )

###### 注意 提的需求就得放到数据库内

###### 客户登录只能看到自己的需求单

### 天气

### 微信小程序中使用 npm 模块

1. 在小程序的根目录下(如果是云开发在 miniprogram )执行 npm init -y
2. 安装模块 我们以小程序的扩展包 wxapp-computed (该包模拟类似 vue 的 computed ) 为例 `npm i wxapp-computed`
3. 在小程序开发工具上面的 工具--> 项目详情 勾选 npm 模块，然后再点击 工具 --> 构建 npm ，做完之后你的项目内就会多一个 miniprogram_npm，代表 npm 模块构建成功。
4. 在你的任意页面导入 npm 模块

   ```js
   import computed from "wxapp-computed"
   ```

5. 如何使用 wxapp-computed 模块

   ```js
   //注意需要使用 computed 替代 Page 内的对象参数
   Page(
     computed({
       data: {
         arr: [1, 2, 3, 4]
       },
       // get 就是计算  totoal 就是计算属性的属性名
       get total() {
         return this.arr.reduce((res, num) => item + num, res)
       }
     })
   )
   ```

   ```html
   <view>{{total}}</view>
   ```
