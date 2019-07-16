## vue 项目介绍

#### 组件

只要是后缀名为 .vue 的文件都称为组件，可以把组件理解成之前 html 内的某个 div，整个 vue 项目就是由很多小的组件组合的。
组件可以复用。组件的名称都是大写字母开头的，或者大驼峰方式 例如:HeaderTop
组件内有三个标签

1. `tempate` (必须)：div 的结构
2. `script`
3. `style` ： 结构的样式

#### 安装环境

使用官方提供的脚手架 vue-cli ,版本是 3.x

- 使用命名 `npm i -g @vue/cli` 全局安装一个 vue 命令
- 使用 `vue create projectName` 新建一个 vue 项目了

#### 针对 vue 命令创建出来的 vue 项目，改版成一个 hello world

对 src 内的文件进行处理

- 找到 app.vue ，删除 `template` 里面的所有内容，以 `<h1>hello world</h1>` 替代，删除 `style` 内的所有内容， 删除 `script` 内的部分内容只留下默认导出对象，以及对象下的 name 属性。
- 找到 components 文件夹直接删除
- 直接去浏览器查看

#### 写另外一个组件，引入到 App.vue 中

- 在 src 文件夹内新建一个文件夹叫 components ，里面新建一个 Button.vue
- 在 App.vue 中的 script 标签内的最上方使用默认导入导入你的 Button.vue，在默认导出的的对象内添加一个 components 属性，该属性的属性值是一个对象，对象内直接写上导入的组件名
- 在 App.vue 的 template 标签内直接写以组件名为标签名的标签即可，一般写成单闭合标签即可，就相当于使用了组件。

## Vue 的基础语法

#### 模板语法

vue 允许在 template 内写 js

- 在两个标签中间 使用{{js语法}} ，这个 js 语句必须有返回值
- 在开始标签内 需要使用指令 v-bind 如何使用 例子如下

  ```js
  <h1 v-bind:class='js语法' />
  // v-bind:  指令可以简写成   :
  ```

#### class 与 style 绑定

vue 组件处理样式的方案

###### class 的绑定

- 对象语法 例子: 加上了 active class 名
  ```js
  <div v-bind:class='{ active: true }' />
  ```
- 数组语法 例子: 加上了 active 以及 bg class 名
  ```js
  <div v-bind:class="[true ? 'active' : '', 'bg']" />
  ```
- 原始语法 例子:加上了 active
  ```js
  <h1 v-bind:class=" true ? 'active' : 'bg' " />
  ```

###### style 的绑定

- 对象语法 例子

  ```js
  <div v-bind:style="{ color: 'red', fontSize: '20px' }" />
  ```

- 数组语法 例子
  ```js
  <div v-bind:style='[styles, otherStyles]' />
  // styles 和 otherStyles 指的对象  {color: 'red'}
  ```

#### Vue 组件的 data(state)

只要页面发生改变就需要设置 data ，由 data 去控制页面的变化。

- 如何创建一个 data，在组件导出的对象下，添加一个属性 data，该属性的属性值为一个函数，该函数必须返回一个对象，对象内写的就是组件的数据。
- 创建好的 data ，在组件的 template 内可以直接使用
- 创建好的 data ，在其他地方使用的时候需要加 this.xxx
- 想要修改 data ，直接对属性进行重新赋值即可

#### Vue 组件的事件处理

使用 v-on 指令绑定事件 可以简写成@ 例子

```html
<button @click="funName">按钮</button>
```

事件函数(funName) 需要在组件默认导出的对象下添加一个 methods 属性,该属性的属性值是一个对象，该对象下的方法就可以被当做事件函数。在 template 内 methods 对象下的方法可以直接使用。
methods 的函数内只要使用了 this 那么这个函数就不能写成箭头函数，必须写成普通函数。

#### 条件渲染

页面中某个元素出现或者消失

1. none --- flex | block | inline-block | inline ,需要使用 v-show 指令 例子:

   ```html
   <div v-show="数据" class="box"></div>
   <!-- 如果 数据的值为 false 的话 div 消失，true 的话出现 -->
   ```

2. 元素在页面中 remove 或者 create ，需要使用指令 v-if ，一般搭配 v-else 一起使用 例子:

   ```html
   <div v-if="showBox1" class="box1">git 图</div>
   <div v-else class="box2"></div>
   ```

   注意 v-if 和 v-else 必须紧挨着，作为兄弟结构

#### 列表渲染

我们页面展示的内容(列表内容),一般都是获取后台数据，将后台数据处理生生页面中的结构。后台的数据一般都是 array。
v-for 经常搭配 v-if 使用,等待后台数据的过程此时展示 gif 图，
在 vue 中实现列表渲染直接使用 v-for 指令 例子
template

```html
<div class="goods" v-for="(cart,index) in carts" :key="cart.id">
  <span>名称: {{cart.goodsName}}</span>
  <span>索引值: {{index}}</span>
</div>
```

v-for 生成的标签必须加上 key 属性，属性值不许保证不重复。跟 vue 底层处理虚拟 dom 有关。一般来说 key 的值都是后台数据的 id 的值

script

```js
data() {
    return {
      carts: [
        {
          id: "xdg12",
          goodsName: "mac book pro",
          price: 12000,
          num: 1
        },
        {
          id: "djashg12",
          goodsName: "奥迪A8",
          price: 1200000,
          num: 1
        }
      ]
    };
  ...
```

#### Vue 组件的 prop

组件的复用：就是小的组件在大组件中反复使用。需要父组件传递对应的信息给子组件。如何传递，就需要使用 vue 组件 prop。如何使用 prop

- 在父组件内使用子组件的时候，可以给子组件创造属性(相当传递的数据) 例如 Header 组件内写成`<Button text="登录"/>`
- 在子组件内的默认导出对象下可以添加一个 props 属性，用来获取父组件传递过来的数据,该属性的属性值是一个数组(也可以是一个对象),数组内写父组件创造的属性名 例如

```js
export default {
  name: "btn",
  props: ["text"]
}
```

写好之后其实 text 就相当于了子组件的一个数据了

- prop 可以设置默认值，直接在 子组件内判断即可 例如
  ```html
  <button class="btn">
    {{text ? text : '默认按钮'}}
  </button>
  ```
- prop 设置默认值的方式还有一种,需要把 props 的属性值写成对象类型,对象下的属性就代表父组件传递过来的属性，该属性的属性值需要写成对象形式，该对象可以有 type default validator ... 属性。 type 属性意思是父组件传递过来的值的类型。 default 属性代表的是默认值。validator 属性是检测父组件传递过来的值是否满足条件，该属性需要写成能一个函数，并返回一个布尔值！

#### 组件的自定义事件

父组件给子组件绑定的自定义事件(父组件向子组件传递函数)

- 在父组件内 使用 @自定义事件名 = "父组件的函数" 向子组件传递函数
- 在子组件内使用 `$emit('自定义函数名')` 接收
- 假如父组件的函数定义的时候写了参数，那么子组件调用的时候就需要传递参数 如何使用 `$emit('自定义函数名','参数1','参数2'。。。)`

例子:
父组件

```html
<button type="signup" text="注册" @clickFun="signUp" />
```

子组件

```js
this.$emit("clickFun")
```

子组件在 template 中直接使用 `$emit('自定义事件名')`

#### 插槽

当父组件想向子组件传递一些 html 结构让子组件展示，此时需要使用插槽。 如何使用

- 在父组件内将需要子组件展示的 html 结构写到子组件的闭合标签内部。例如

  ```html
  <Modal title="对话框" okText="OK" cancelText="Cancel">
    <!-- 插槽的父组件内的写法 -->
    <span>123456</span>
  </Modal>
  ```

- 在子组件内使用 slot 标签接收父组件传递过来的 html 结构 例如

  ```html
  <div class="modal-content">
    <!-- slot代表父组件传递过来的结构-->
    <slot></slot>
  </div>
  ```

  插槽可以添加命名称，称作为具名插槽。(作用就是将父组件传递过来的 html 结构，按需处理，有的结构放在 header 有的结构放在 footer)

- 在父组件内的子组件闭合标签内，使用 template 标签嵌套某个 html 结构，并且给该 template 标签写上 v-slot:名

- 在子组件内 使用 `<slot name="父组件内的 template 标签的v-slot的值"></slot>`

#### 组件之间的交互

- 父组件和子组件之间的交互
  - prop
  - 组件的自定义事件
- 子组件和父组件之间的交互
  子组件修改父组件的状态(data),先在父组件内声明修改自己 data 的方法，把方法传递给子组件执行即可
  - 组件的自定义事件
  - prop
- 兄弟组件之间的交互
  - 将需要交互的 data 定义在共同的祖先组件内
  - 把祖先的 data 和 修改 data 的方法当作 prop 或自定义事件传递给子组件
- vuex(终极解决方案)

#### Vue 组件的计算属性 computed

当个你有了一个 data ，但是使用的时候并不是直接使用 data 数据而是使用 data 数据的变形，此时需要定义一个 computed,computed 的用法和 data 一样 例如

```js
 computed: {
    commentNum() {
      return this.comments.length;
    },
    currentComments() {
      return [...this.comments].reverse();
    }
  }
```

#### 插件的使用

- shortId 简短的 id，辅助生成不重复 id
  - 安装包 `npm i shortid`
  - import 引入
  - 使用

#### Vue 组件内的过渡和动画

transition 和 transition-group

#### Vue 的路由

vue 项目内的页面跳转，本身 vue 内不带路由功能，需要自己添加。

- 安装 vue 路由 `npm i vue-router`
- 新建一个 src/router.js
- 在 router.js 内给 vue 项目安装上路由功能
  ```js
  import Vue from "vue"
  import VueRouter from "vue-router"
  Vue.use(VueRouter)
  ```
- 创建路由 `new VueRouter({routes:xxxxx,mode: xxxx})`
  ```js
  const routes = [
    {
      component: "组件名",
      path: "地址"
    }
  ]
  const router = new VueRouter({
    routes,
    mode: "history"
  })
  ```
- 将创建好的路由导出
  ```js
  export default router
  ```
- 到项目的 main.js 内导入路由并使用
  ```js
  import router from "./router"
  new Vue({
    router
  })
  ```
- 在 Vue 项目所有组件内都可以使用路由了
  ```html
  <!-- 使用 router-view 标签展示路由 -->
  <router-view></router-view>
  <!-- 使用 router-link 标签实现路由的跳转 -->
  <router-link to="路由页面的path"></router-link>
  ```

#### Vue 项目部署

- 先确保本地的 localhost:8080 下的项目能正常运行
- 在项目下打开命令行执行 `npm run build` ,把你做好的项目打包到项目下的 dist 文件夹下
- 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  更改 publicPath，修改 vue cli 的配置环境

  - 在项目根目录下 新建一个文件 vue.config.js ,该文件会自动被加入到 vue 的配置环境中。
  - 在文件内写

    ```js
    module.exports = {
      publicPath: process.env.NODE_ENV === "production" ? "/你的子目录地址/" : "/"
    }
    ```
- publicPath 配置完毕需要重新编译打包生成新的  dist 文件夹在重新部署到你的 github 上

#### 错误提示

- `<Dem> - did you register the component correctly?`
- `Failed to compile.` 编译失败 `Module not found: Error: Can't resolve './components/Dem' in 'D:\digitalcity授课\2019\1903\1903\vue-demo\src'`

#### homework

仿京东轮播图
功能

- 左右箭头
- 按钮
  规范
- 一个组件
- 图片要用数据生成图片的地址写成 网络地址 http

写一个静态页面

#### modal homework

实现 modal 的全部功能

- 点击 x 关闭
- 点击蒙层关闭
- 点击 cancel 关闭，并且执行 父组件的 cancel 事件
- 点击 ok 关闭，并且执行 父组件的 ok 事件

modal 进阶

将 app 内的 open button 写成组件
