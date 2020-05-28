<template>
  <div class="container my-shadow box">
    <h2 style="margin-bottom: 30px">商城管理</h2>
    <Table :columns="tableHeader" :data="tableData" border></Table>
  </div>
</template>
  
<script>
import { getGifts } from "@/api/apis";
export default {
  data() {
    return {
      tableHeader: [
        {
          type: "index",
          width: 60,
          align: "center"
        },
        { title: "名称", key: "shop.name" },
        { title: "所需积分", key: "shop.integral" },
        { title: "描述", key: "shop.description" }
      ],
      tableData: [],
      currentPage: 1,
      pageSize: 10
    };
  },
  created() {
    this.getTableData({
      currentPage: 1,
      pageSize: 10
    });
  },
  methods: {
    getTableData(info) {
      getGifts(info).then(res => {
        console.log(res);
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
}
.form {
  width: 700px;
  margin: 0 auto;
  margin-top: 40px;
}
</style>