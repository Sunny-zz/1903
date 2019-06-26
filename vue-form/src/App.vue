<template>
  <div>
    <h1>vue 表单操作</h1>
    <!-- <form action>
      {username: xxx,password: xx}
      <input type="text" value="xxx" name="username">
      <input type="submit">
    </form>-->
    <!-- input 事件域的内容发生改变的时候触发 -->
    <!-- change 失去焦点的时候触发 -->
    <!-- <input @input="changeVal" type="text" :value="val"> -->
    <input type="text" v-model="val">
    <button @click="submit">提交</button>
    <input type="checkbox" v-model="checked">

    <!-- 调查问卷 -->
    <h2>调查问卷</h2>
    <p>请问你喜欢下面哪种水果？</p>
    <div>
      <input id="one" value="榴莲1" type="checkbox" v-model="checkedFruits">
      <label for="one">榴莲1</label>
      <br>
      <input id="two" value="榴莲2" type="checkbox" v-model="checkedFruits">
      <label for="two">榴莲2</label>
      <br>
      <input id="three" value="榴莲3" type="checkbox" v-model="checkedFruits">
      <label for="three">榴莲3</label>
    </div>
    <p>查看结果:{{checkedFruits}}</p>
    <h2>单选</h2>
    <div>
      <input type="radio" id="one1" value="male" v-model="picked">
      <label for="one1">男</label>
      <br>
      <input type="radio" id="two1" value="female" v-model="picked">
      <label for="two1">女</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <h2>选择框</h2>
    <select v-model="selectedVal">
      <option disabled value>请选择</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <h2>修饰符</h2>
    <!-- v-model 修饰符   .number  .lazy   .trim -->
    <input v-model.number="number" type="number">
    <button @click="getNum">按钮(获取输入的数值)</button>
    <!-- v-on 修饰符 .stop(阻止事件冒泡)  .prevent 阻止默认行为 .self只当在 event.target 是当前元素自身时触发处理函数  .once  事件将只会触发一次 -->
    <!-- 按键修饰符 绑定的是键盘事件   .enter    .13  -->
    <button @click="handleClick">测试v-on修饰符</button>
  </div>
</template>

<script>
// for  if  else  show  else if  bind  on  model
export default {
  name: "app",
  data() {
    return {
      val: "1",
      checked: false,
      checkedFruits: [],
      picked: "",
      selectedVal: "",
      number: 0
    };
  },
  methods: {
    // 如果时间函数内需要使用 event 的话，在函数声明的时候定义一个 event 参数，在调用的时候传递 $event
    // 不传递并且在事件函数声明的时候不添加参数直接使用 event 也可以
    // changeVal(num) {
    //   // console.log("111111");
    //   //获取输入框内的 value 值(输入的内容)     使用 event.target 获取触发事件的元素 通过该元素的  value 属性获取 输入的内容
    //   // console.log(event.target.value);
    //   this.val = event.target.value;
    // },
    submit() {
      console.log(this.val);
    },
    getNum() {
      console.log(this.number);
    },
    handleClick() {
      console.log("1111");
    }
  }
};
</script>

<style>
</style>
