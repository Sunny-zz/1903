<template>
  <div>
    <h1>组件之间的交互</h1>
    <ul>
      <li>
        评论 6666
        <Button @handleClick="open" text="删除"/>
      </li>
    </ul>
    <button @click="open">按钮(open)</button>
    <Modal
      :visible="show"
      title="对话框"
      okText="OK"
      cancelText="Cancel"
      @close="close"
      @okFunction="del"
    >
      <template v-slot:content>
        <p>12344554</p>
      </template>
      <!-- <p>1000000000000000</p> -->
      <!-- <template v-slot:head>
        <button>按钮</button>
      </template>-->
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";
import Button from "./components/Button";
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  components: {
    Modal,
    Button
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    del() {
      // 删除某一个 li
      console.log("删除 li");
    }
  }
};
</script>

<style>
</style>
