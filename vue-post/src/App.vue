<template>
  <div>
    <h1>vue 的应用案例文章的评论(兄弟组件之间的交互)</h1>
    <CommentForm @addComment="addComment"/>
    <Comment :number="commentNum" @delComment="deleteComment" :comments="currentComments"/>

    <h2>Vue 组件内的过渡和动画</h2>
    <button @click="handleClick">按钮</button>
    <transition appear name="fade">
      <div v-show="show" class="box"></div>
    </transition>
    <button @click="show1 = !show1">toggle实现动画</button>
    <transition appear name="bounce">
      <p
        v-if="show1"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";
import shortId from "shortid";
export default {
  name: "app",
  components: {
    CommentForm,
    Comment
  },
  data() {
    return {
      // comments 设定好的一个 data
      // 但是我们使用的时候 使用的是 data 数据的变形，一般使用 computed 属性存储计算属性(变形之后的结果)  computed 和data 使用是一模一样的
      comments: [
        {
          id: "12sw",
          text: "666"
        },
        {
          id: "12sw21",
          text: "哇塞"
        },
        {
          id: "12312sw",
          text: "666哇塞"
        }
      ],
      show: true,
      show1: true
    };
  },
  // 就相当于一个新的 data   计算属性
  // computed 是一个对象 该对象下只能写方法 并且必须写返回值 返回的结果就是计算属性
  computed: {
    commentNum() {
      return this.comments.length;
    },
    currentComments() {
      return [...this.comments].reverse();
    }
  },
  methods: {
    addComment(commentText) {
      // 获取输入框的内容
      const newComment = {
        id: shortId(),
        text: commentText
      };
      this.comments.push(newComment);
    },
    deleteComment(id) {
      // 删除事件  知道你点击的是哪一个删除按钮  通过 id 找到对应的内容
      console.log(id);
      // 已知数组内某个对象的 id 值，将此对象从数组中删除    filter
      this.comments = this.comments.filter(item => item.id != id);
    },
    handleClick() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
  margin-left: 200px;
}
/* 出现过程中 ， 离开过程中 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
/* fade-enter  出现开始的样式 */
/* fade-leave-to 离开结束的样式 */
.fade-enter/* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-200px) rotate(3600deg);
}
.fade-leave-to {
  transform: translateX(200px) rotate(3600deg);
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
.bounce-enter-active {
  animation: bounce-out 0.5s;
  /* animation: name duration timing-function delay iteration-count direction
    fill-mode; */
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
