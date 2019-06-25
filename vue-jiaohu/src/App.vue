<template>
  <div>
    <h1>组件之间的交互</h1>
    <button @click="open">按钮(open)</button>
    <Modal :visible="show" title="对话框" okText="OK" cancelText="Cancel" @close="close">
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
export default {
  name: "app",
  data() {
    return {
      show: false
    };
  },
  components: {
    Modal
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style>
</style>
