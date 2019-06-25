<template>
  <div v-show="visible" class="modal-wrap">
    <div class="modal-mask"></div>
    <div class="modal">
      <div class="modal-head">
        <div class="title">{{title}}</div>
        <span style="cursor:pointer;padding: 10px;" @click="$emit('close')">X</span>
        <!-- <slot name="head"></slot> -->
      </div>
      <div class="modal-content">
        <!-- 展示的标签内容不固定 -->
        <slot name="content"></slot>
      </div>
      <div class="modal-foot">
        <button style="marginRight:12px;">{{cancelText}}</button>
        <button>{{okText}}</button>
        <!-- 默认插槽 名字是 default -->
        <!-- <slot></slot> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    title: {
      default: "default title",
      type: String
    },
    okText: {
      default: "确定"
    },
    cancelText: {
      default: "取消"
    },
    visible: {
      type: Boolean,
      required: true
    }
  }
};
</script>
<style>
.modal-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.modal-wrap .modal-mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-wrap .modal {
  width: 520px;
  height: 240px;
  background-color: #fff;
  border-radius: 8px;
  /* position:absolute; 找最近祖先的position为参照物 */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  display: flex;
  flex-direction: column;
}
.modal-wrap .modal .modal-head {
  padding: 15px 20px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.modal-wrap .modal .modal-content {
  flex-grow: 1;
  padding: 15px 20px;
}
.modal-wrap .modal .modal-foot {
  display: flex;
  padding: 15px 20px;
  flex-shrink: 0;
  border-top: 1px solid #ccc;
  justify-content: flex-end;
}
</style>
