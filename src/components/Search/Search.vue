<template>
  <div class="container my-shadow box">
    <div class="input-group">
      <i-input class="input" v-model="content" placeholder="输入任务标题关键字进行查询"></i-input>
      <Button shape="circle" icon="ios-search" @click="search"></Button>
    </div>
    <div>
      <Loader :loading="loading" />
    </div>
  </div>
</template>

<script>
import { searchTask } from "@/api/apis";
import Loader from "@/components/Components/Loader";
export default {
  data() {
    return {
      content: "",
      pageSize: 10,
      currentPage: 1,
      loading: false
    };
  },
  components: {
    Loader
  },
  methods: {
    search() {
      searchTask();
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
}
.input {
  width: 400px;
  margin-right: 15px;
}
</style>