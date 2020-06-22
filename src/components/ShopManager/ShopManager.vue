<template>
  <div class="container my-shadow box">
    <div style="display: flex; justify-content: space-between;margin-bottom: 30px">
      <h2>商城管理</h2>
      <Button type="primary" @click="modal1=true">新增</Button>
    </div>
    <Table :columns="tableHeader" :data="tableData" border :loading="loading">
      <template slot-scope="{ row,index }" slot="img">
        <Input type="text" v-model="editObject['shop.img']" v-if="editIndex === index" />
        <Poptip v-else trigger="hover" placement="bottom-start" transfer>
          <span style="text-decoration: underline; cursor: pointer; color: #52B2EF">{{row['img']}}</span>
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
          <Button style="color: red" @click="handleDelete(row, index)">删除</Button>
        </div>
      </template>
    </Table>
    <Page style="margin-top: 30px; float: right" :total="total" @on-change="onChange" />
    <Modal v-model="modal1" title="添加新商品" @on-ok="addNewGift" @on-cancel="cancel">
      <Form :model="formTop" label-position="right" :label-width="40">
        <FormItem label="名称">
          <Input v-model="formTop['shop.name']"></Input>
        </FormItem>
        <FormItem label="积分">
          <Input v-model="formTop['shop.integral']"></Input>
        </FormItem>
        <FormItem label="图片">
          <Input v-model="formTop['shop.img']"></Input>
        </FormItem>
        <FormItem label="描述">
          <Input v-model="formTop['shop.description']" type="textarea"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
  
<script>
import {
  addGift,
  deleteGift,
  updateGift,
  getGiftsWithoutDelete
} from "@/api/apis";
export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      total: 12,
      loading: true,
      saveLoading: false,
      formTop: {},
      tableHeader: [
        // {
        //   title: "ID",
        //   key: "id",
        //   width: 60,
        //   align: "center"
        // },
        { title: "图片", slot: "img" },
        { title: "名称", slot: "name" },
        { title: "所需积分", slot: "integral" },
        { title: "描述", slot: "description" },
        { title: "操作", slot: "action" }
      ],
      tableData: [],
      editIndex: -1,
      currentPage: 1,
      pageSize: 10,
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
    // 添加新的商品
    addNewGift() {
      addGift(this.formTop).then(res => {
        for (const key in this.formTop) {
          if (this.formTop.hasOwnProperty(key)) {
            this.formTop[key] = "";
          }
        }
        this.getTableData({
          currentPage: this.currentPage
        });
        this.$Message.success("添加成功");
      });
    },
    // 获取数据
    getTableData(info) {
      info["pageSize"] = this.pageSize;
      this.loading = true;
      getGiftsWithoutDelete(info).then(res => {
        console.log(res);
        let arr = res.data.data.data;
        this.tableData = arr.filter(elem => {
          if (!elem.deleted) {
            return elem;
          }
        });
        // this.tableData = res.data.data.data;
        this.total = res.data.data.total;
        this.loading = false;
      });
    },
    // 删除
    handleDelete(row, index) {
      if (confirm("确认要删除吗？")) {
        deleteGift({
          "shop.id": row.id
        }).then(res => {
          if (res.data.code === 200) {
            this.getTableData({
              currentPage: this.currentPage
            });
            this.$Message.success("删除成功");
          }
        });
      }
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
      updateGift(Object.assign({ "shop.isDeleted": 0 }, this.editObject)).then(
        res => {
          console.log(res);
          this.tableData[index].img = this.editObject["shop.img"];
          this.tableData[index].integral = this.editObject["shop.integral"];
          this.tableData[index].description = this.editObject[
            "shop.description"
          ];
          this.tableData[index].name = this.editObject["shop.name"];
          this.tableData[index].id = this.editObject["shop.id"];
          this.editObject = {};
          this.editIndex = -1;
          this.saveLoading = false;
          this.$Message.success("保存成功");
        }
      );
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