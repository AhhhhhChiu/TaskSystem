<template>
  <div class="container my-shadow box">
    <div :style="{display: from==='search'?'': 'none'}" class="input-group">
      <i-input class="input" v-model="content" placeholder="输入任务标题关键字进行查询"></i-input>
      <Button shape="circle" icon="ios-search" @click="search"></Button>
    </div>
    <div>
      <Task v-for="i in list" :key="i.id" :item="i" :from="from" />
      <Loader :loading="loading" />
      <div v-if="list.length === 0 && !loading">空空如也~</div>
    </div>
  </div>
</template>

<script>
import { searchTask, getUserTasks, getPostTasks } from "@/api/apis";
import Task from "@/components/Components/Task";
import Loader from "@/components/Components/Loader";
export default {
  data() {
    return {
      content: "",
      pageSize: 999,
      currentPage: 1,
      loading: false,
      length: 0,
      from: "search",
      list: []
    };
  },
  components: {
    Loader,
    Task
  },
  watch: {
    $route: "changeRoute"
  },
  created() {
    this.changeRoute();
  },
  methods: {
    changeRoute() {
      this.from = this.$route.meta.from;
      switch (this.from) {
        case "search":
          // do something
          break;
        case "myTasks":
          this.getUserTasks();
          break;
        case "postTasks":
          this.getPostTasks();
          break;
      }
    },
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
    },
    getUserTasks() {
      this.list = [];
      this.loading = true;
      getUserTasks({
        currentPage: 1,
        pageSize: 999
      }).then(res => {
        console.log(res);
        if (res.data.data.total > 0) this.list = res.data.data.data;
        this.loading = false;
      });
    },
    getPostTasks() {
      this.list = [];
      this.loading = true;
      getPostTasks({
        currentPage: 1,
        pageSize: 999
      }).then(res => {
        console.log(res);
        if (res.data.data.total > 0) this.list = res.data.data.data;
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