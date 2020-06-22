<template>
  <div class="container main">
    <Content class="left my-shadow" padding="0">
      <nav>
        <ul @click="changeTaskType">
          <li v-for="item in typeList" :key="item">{{item}}</li>
        </ul>
      </nav>
    </Content>
    <Content class="right my-shadow">
      <Task v-for="i in list" :key="i" :item="i" from="search" />
      <Loader :loading="loading" />
      <div style="margin-top: 50px" v-if="total === 0 && !loading">这个分类下暂时没有任务</div>
      <Button
        v-if="total !== 0 && !loading"
        @click="loadMore"
        size="small"
        :loading="loadingMore"
        style="margin-top: 30px"
      >加载更多</Button>
    </Content>
  </div>
</template>

<script>
import { getTaskById, getTaskByTypeId } from "@/api/apis";
import Task from "@/components/Components/Task";
import Loader from "@/components/Components/Loader";
export default {
  data() {
    return {
      typeList: [
        "软件外包",
        "跑腿代取",
        "视频剪辑",
        "食堂兼职",
        "办公助理",
        "澳门代购"
      ],
      loading: false,
      loadingMore: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      list: [],
      currentType: 0
    };
  },
  components: {
    Task,
    Loader
  },
  created() {
    this.getTaskByTypeId({ "task.type_id": 0, currentPage: 1, pageSize: 10 });
  },

  methods: {
    // 获取任务
    getTaskByTypeId(info) {
      this.list = [];
      this.loading = true;
      getTaskByTypeId(info).then(res => {
        console.log(res);
        let resp = res.data.data;
        if (resp.hasOwnProperty("data")) {
          this.list = res.data.data.data;
          // this.list.concat(res.data.data.data);
          this.total = res.data.data.total;
        } else {
          this.list = [];
          this.total = 0;
        }
        this.loading = false;
        console.log(this.list);
      });
    },

    // 加载更多
    loadMore() {
      this.loadingMore = true;
      getTaskByTypeId({
        "task.type_id": this.currentType,
        currentPage: ++this.currentPage,
        pageSize: 10
      }).then(res => {
        let resp = res.data.data;
        console.log(resp);
        if (resp.data) {
          // this.list = res.data.data.data;
          this.list = this.list.concat(res.data.data.data);
          this.total = res.data.data.total;
        } else {
          this.$Notice.info({
            title: "没有更多数据了"
          });
          this.loadingMore = false;
        }
        this.loadingMore = false;
        console.log(this.list);
      });
    },

    // 更改
    changeTaskType(event) {
      if (event.target.nodeType === 1) {
        this.currentType = this.typeList.indexOf(event.target.innerHTML);
        this.getTaskByTypeId({
          "task.type_id": this.currentType,
          currentPage: 1,
          pageSize: 10
        });
      }
    }
    //
  }
};
</script>

<style scoped>
.item {
  width: 600px;
  /* min-height: 200px; */
  margin-top: 40px;
  border-bottom: solid 1px #ddd;
}
.title {
  display: block;
  color: #6d6d6d;
  word-wrap: break-word;
  font-weight: normal;
}
.info {
  height: fit-content;
  padding: 5px 0;
  color: #999;
  display: flex;
  flex-direction: row;
}
.article {
  padding: 5px 0 15px 0;
}
.footer {
  float: right;
  margin-bottom: 25px;
}
nav {
  width: 240px;
  background-color: #fff;
  padding: 20px 0;
}
nav li {
  list-style: none;
  padding: 10px 30px;
  cursor: pointer;
  transition: all 0.2s;
}
nav li:hover {
  background-color: #f2f2f2;
  padding-left: 40px;
  font-weight: bold;
}
.left {
  /* width: 240px; */
  margin-right: 20px;
  height: fit-content;
}
.right {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>