<template>
  <div v-if="comments.length" class="comment-box">
    <textarea style="resize:none;" cols="30" rows="10" v-model="commentText"></textarea>
    <button @click="addComment">添加</button>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <span>{{comment.text}}</span>
        <button @click="deleteComment(comment.id)">删除</button>
      </li>
    </ul>
  </div>
  <div v-else class="empty">评论为空，请添加。。</div>
</template>

<script>
// 给 添加按钮绑定点击事件
// 事件内 获取输入框的内容  创建一个对象  将 获取的内容放到对象内   并将该对象添加到数组内
export default {
  name: "comment",
  data() {
    return {
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
      commentText: ""
    };
  },
  methods: {
    addComment() {
      if (this.commentText.trim() !== "") {
        const newComment = {
          id: new Date().getTime(),
          text: this.commentText
        };
        this.comments.push(newComment);
        this.commentText = "";
      } else {
        alert("请输入有效字符");
      }
    },
    deleteComment(id) {
      // 删除事件  知道你点击的是哪一个删除按钮  通过 id 找到对应的内容
      console.log(id);
      // 已知数组内某个对象的 id 值，将此对象从数组中删除    filter
      this.comments = this.comments.filter(item => item.id != id);
    }
  }
};

// homework  1.上面必须弄懂  2. 将添加评论的功能放到 另外一个组件
// 兄弟组件间的交互
// 1. 把需要交互的 data 放到同一个祖先内
// 2. 兄弟组件间的交互转化成了父子之间的交互
</script>

<style>
</style>
