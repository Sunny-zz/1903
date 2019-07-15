<template>
  <div>
    <select v-model="tab">
      <option value>请选择</option>
      <option value="share">分享</option>
      <option value="ask">问答</option>
      <option value="job">招聘</option>
    </select>
    <input type="text" v-model="title" />
    <quill-editor
      style="width:500px"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "app",
  data() {
    return {
      tab: "",
      title: "",
      content: "",
      editorOption: {
        // 富文本编辑器的配置 添加删除某些功能
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      axios
        .post("https://www.vue-js.com/api/v1/topics", {
          tab: this.tab,
          content: this.content,
          title: this.title,
          accesstoken: sessionStorage.getItem("token")
        })
        .then(res => {
          console.log(res.data);
          this.tab = "";
          this.title = "";
          this.content = "";
          this.$router.push(`/topic/${res.data.topic_id}`);
        });
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      // 当富文本编辑器输入了内容的话 同步修改 你自己的  data content
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>

<style>
</style>
