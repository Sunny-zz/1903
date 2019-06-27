<template>
  <div v-if="comments.length" class="comment-box">
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <span>{{comment.text}}</span>
        <button @click="$emit('delComment',comment.id)">删除</button>
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
  props: ["comments"],
  methods: {}
};

// homework  1.上面必须弄懂  2. 将添加评论的功能放到 另外一个组件
// 兄弟组件间的交互
// 1. 把需要交互的 data 放到同一个祖先内
// 2. 兄弟组件间的交互转化成了父子之间的交互
</script>

<style>
</style>
