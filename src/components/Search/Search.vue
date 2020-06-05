<template>
  <div class="container my-shadow box">
    <div class="input-group">
      <i-input class="input" v-model="content" placeholder="输入任务标题关键字进行查询"></i-input>
      <Button shape="circle" icon="ios-search" @click="search"></Button>
    </div>
    <div>
      <Task v-for="i in list" :key="i.id" :item="i" />
      <Loader :loading="loading" />
      <div v-if="list.length === 0 && !loading">空空如也~</div>
    </div>
  </div>
</template>

<script>
import { searchTask } from "@/api/apis";
import Task from "@/components/Components/Task";
import Loader from "@/components/Components/Loader";
export default {
  data() {
    return {
      content: "",
      pageSize: 100,
      currentPage: 1,
      loading: false,
      length: 0,
      list: []
    };
  },
  components: {
    Loader,
    Task
  },
  methods: {
    search() {
      if (!this.content) {
        this.$Message.error("搜索内容不能为空");
        return;
      }
      this.list = [];
      this.loading = true;
      searchTask({
        pageSize: this.pageSize,
        currentPage: this.currentPage,
        "task.title": this.content
      }).then(res => {
        console.log(res);
        this.list = res.data.data.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped>
.box {
  background: white;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-group {
  display: flex;
  margin-bottom: 100px;
}
.input {
  width: 400px;
  margin-right: 15px;
}
</style>