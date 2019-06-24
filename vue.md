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
- prop 设置默认值的方式还有一种,需要把 props 的属性值写成对象类型,对象下的属性就代表父组件传递过来的属性，该属性的属性值需要写成对象形式，该对象可以有 type default ... 属性。 type 属性意思是父组件传递过来的值的类型。 default 属性代表的是默认值。



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

```

```
