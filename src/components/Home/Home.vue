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
      <!-- 下面这里就是列表 -->
      <!-- area: null
      content: "wqewqe123rewr"
      create_time: "2020-05-22T18:15:00"
      create_user: 2
      end_time: "2020-06-10T01:11:11"
      id: 50
      img: "wqeqw"
      integral: 12
      number: 11
      start_time: "2020-05-22T01:11:11"
      status: false
      title: "wqe123213"
      type_id: 1 -->
      <Card
        v-for="i in (1)"
        :key="i.id"
        dis-hover
        style="height: fit-content; width: 700px; margin: 20px;"
      >
        <p slot="title">【软件外包】有没有人会做小程序的</p>
        <span href="#" slot="extra">2020/5/19</span>
        <p>需求是这样的：这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样</p>
      </Card>
      <!-- 上面这里就是列表 -->
    </Content>
  </div>
</template>

<script>
import { getTaskById, getTaskByTypeId } from "@/api/apis";
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
      currentPage: 1,
      pageSize: 10,
      list: []
    };
  },

  created() {
    this.getTaskByTypeId({ "task.typei_d": 0, currentPage: 1, pageSize: 10 });
  },

  methods: {
    // 获取任务
    getTaskByTypeId(info) {
      getTaskByTypeId(info).then(res => {
        this.list = res.data.data.data;
        console.log(this.list);
      });
    },

    // 更改
    changeTaskType(event) {
      if (event.target.nodeType === 1) {
        this.getTaskByTypeId({
          "task.type_id": this.typeList.indexOf(event.target.innerHTML),
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