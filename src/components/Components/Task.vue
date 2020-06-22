<template>
  <div class="item">
    <h2 class="title">{{item.title}}</h2>
    <div class="info">
      <span>{{item.start_time.split("T")[0]}} - {{item.end_time.split("T")[0]}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <span>{{typeList[item.type_id]}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <span>{{item.phone}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <span>{{item.integral}}积分</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <span>{{item.number > 0? item.number: ~item.number - 1}}人</span>
    </div>
    <div class="article">{{item.content}}</div>
    <div v-if="from=='search'" class="footer">
      <Button v-if="item.number > 0" size="small" @click="accept" :loading="loading">接受任务</Button>
      <span v-else style="color: #19be6b">已接受</span>
    </div>
    <div v-if="from=='myTasks'" class="footer">
      <span v-if="item.status" style="color: #19be6b">已完成</span>
      <span v-else style="color: #ff9900">进行中</span>
    </div>
    <div v-if="from=='postTasks'" class="footer">
      <span v-if="item.status" style="color: #19be6b">已完成</span>
      <Button v-else size="small" @click="complete" :loading="loading">完成任务</Button>
    </div>
  </div>
</template>

<script scoped>
import { acceptTask, completeTask } from "@/api/apis";
export default {
  // area: null
  // content: "wqewqe123rewr"
  // create_time: "2020-05-22T18:15:00"
  // create_user: 2
  // end_time: "2020-06-10T01:11:11"
  // start_time: "2020-05-22T01:11:11"
  // id: 50
  // img: "wqeqw"
  // integral: 12
  // number: 11
  // status: false
  // title: "wqe123213"
  // type_id: 1
  props: ["item", "from"],
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
      loading: false
    };
  },
  methods: {
    accept() {
      this.loading = true;
      acceptTask({ "task.id": this.item.id }).then(res => {
        console.log(res);
        this.$Message.success("任务接受成功");
        this.loading = false;
        this.item.number = -(this.item.number + 1);
      });
    },
    complete() {
      this.loading = true;
      completeTask({ "task.id": this.item.id }).then(res => {
        console.log(res);
        this.$Message.success("任务已完成");
        this.loading = false;
        // this.item.number = -this.item.number;
        this.item.status = true;
      });
    }
  }
};
</script>

<style>
.item {
  width: 600px;
  /* height: fit-content; */
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
  /* float: right; */
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}
</style>