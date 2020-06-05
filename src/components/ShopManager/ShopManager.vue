<template>
  <div class="container my-shadow box">
    <h2 style="margin-bottom: 30px">商城管理</h2>
    <Table :columns="tableHeader" :data="tableData" border :loading="loading">
      <template slot-scope="{ row,index }" slot="img">
        <Input type="text" v-model="editObject['shop.img']" v-if="editIndex === index" />
        <Poptip v-else trigger="hover" placement="bottom-start" transfer>
          <span style="text-decoration: underline; cursor: pointer; color: #52B2EF">{{row['name']}}</span>
          <div slot="content">
            <img :src="row.img" alt="图片加载失败" />
          </div>
        </Poptip>
      </template>
      <template slot-scope="{ row, index }" slot="name">
        <Input type="text" v-model="editObject['shop.name']" v-if="editIndex === index" />
        <span v-else>{{ row['name'] }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="integral">
        <Input type="text" v-model="editObject['shop.integral']" v-if="editIndex === index" />
        <span v-else>{{ row['integral'] }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="description">
        <Input type="text" v-model="editObject['shop.description']" v-if="editIndex === index" />
        <span v-else>{{ row['description'] }}</span>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)" :loading="saveLoading">保存</Button>
          <Button @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <Button @click="handleEdit(row, index)">编辑</Button>
        </div>
      </template>
    </Table>
    <Page style="margin-top: 30px; float: right" :total="total" @on-change="onChange" />
  </div>
</template>
  
<script>
import { getGifts, updateGift } from "@/api/apis";
export default {
  data() {
    return {
      total: 12,
      loading: true,
      saveLoading: false,
      tableHeader: [
        {
          title: "ID",
          key: "id",
          width: 60,
          align: "center"
        },
        { title: "图片", slot: "img" },
        { title: "名称", slot: "name" },
        { title: "所需积分", slot: "integral" },
        { title: "描述", slot: "description" },
        { title: "操作", slot: "action" }
      ],
      tableData: [],
      editIndex: -1,
      currentPage: 1,
      pageSize: 12,
      editObject: {
        "shop.img": "",
        "shop.integral": "",
        "shop.description": "",
        "shop.name": "",
        "shop.id": ""
      }
    };
  },
  created() {
    this.getTableData({
      currentPage: 1
    });
  },
  methods: {
    // 获取数据
    getTableData(info) {
      info["pageSize"] = this.pageSize;
      this.loading = true;
      getGifts(info).then(res => {
        console.log(res);
        this.tableData = res.data.data.data;
        this.total = res.data.data.total;
        this.loading = false;
      });
    },
    // 编辑
    handleEdit(row, index) {
      this.editObject["shop.img"] = row["img"];
      this.editObject["shop.integral"] = row["integral"];
      this.editObject["shop.description"] = row["description"];
      this.editObject["shop.name"] = row["name"];
      this.editObject["shop.id"] = row["id"];
      this.editIndex = index;
    },
    // 保存
    handleSave(index) {
      this.saveLoading = true;
      updateGift(this.editObject).then(res => {
        console.log(res);
        this.tableData[index].img = this.editObject["shop.img"];
        this.tableData[index].integral = this.editObject["shop.integral"];
        this.tableData[index].description = this.editObject["shop.description"];
        this.tableData[index].name = this.editObject["shop.name"];
        this.tableData[index].id = this.editObject["shop.id"];
        this.editObject = {};
        this.editIndex = -1;
        this.saveLoading = false;
        this.$Message.success("保存成功");
      });
    },
    // 翻页
    onChange(page) {
      this.currentPage = page;
      this.getTableData({
        currentPage: page
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