# vue-hello

## vue 项目介绍

#### 组件

只要是后缀名为 .vue 的文件都称为组件，可以把组件理解成之前 html 内的某个 div，整个 vue 项目就是由很多小的组件组合的。
组件可以复用。组件的名称都是大写字母开头的，或者大驼峰方式 例如:HeaderTop
组件内有三个标签

1. `tempate` (必须)：div 的结构
2. `script`
3. `style` ： 结构的样式

#### 针对 vue 命令创建出来的 vue 项目，改版成一个 hello world

对 src 内的文件进行处理

- 找到 app.vue ，删除 `template` 里面的所有内容，以 `<h1>hello world</h1>` 替代，删除 `style` 内的所有内容， 删除 `script` 内的部分内容只留下默认导出对象，以及对象下的 name 属性。
- 找到 components 文件夹直接删除
- 直接去浏览器查看

#### 写另外一个组件，引入到 App.vue 中

- 在 src 文件夹内新建一个文件夹叫 components ，里面新建一个 Button.vue
- 在 App.vue 中的 script 标签内的最上方使用默认导入导入你的 Button.vue，在默认导出的的对象内添加一个 components 属性，该属性的属性值是一个对象，对象内直接写上导入的组件名
- 在 App.vue 的 template 标签内直接写以组件名为标签名的标签即可，一般写成单闭合标签即可，就相当于使用了组件。
