<template>
  <div class="container main">
    <Content class="left my-shadow" padding="0"></Content>
    <Content class="right my-shadow">
      <div class="cover">
        <img src="../../assets/large.jpg" alt />
      </div>
      <div class="info">
        <div class="avatar">
          <img src="https://dev-file.iviewui.com/avatar_default/avatar" />
        </div>
        <div class="form">
          <div style="diplay:flex; justify-content: space-between">
            <div class="name">AhChiu</div>
            <Button style="margin-left: 6px" size="small">退出</Button>
          </div>
          <Form style="margin-top: 30px;" :model="formItem" :label-width="50">
            <FormItem label="账号">123123123123123</FormItem>
            <FormItem label="积分">123</FormItem>
            <FormItem label="昵称">
              <input
                class="input"
                style="width: 500px"
                :disabled="!isEdit"
                v-model="formItem.input"
              />
            </FormItem>
            <FormItem label="手机">
              <input
                class="input"
                style="width: 500px"
                v-model="formItem.input"
                :disabled="!isEdit"
              />
            </FormItem>
            <FormItem label="邮箱">
              <input
                class="input"
                style="width: 500px"
                v-model="formItem.input"
                :disabled="!isEdit"
              />
            </FormItem>
            <FormItem label="地区">
              <!-- <Select v-model="formItem.select">
                <Option value="校内">校内</Option>
                <Option value="校外">校外</Option>
              </Select>-->
              <input class="input" style="width: 500px" v-model="formItem.select" disabled />
            </FormItem>
            <FormItem :style="{display: isEdit?'none':''}">
              <Button type="primary" :style="{float: 'right'}" @click="isEdit=true">编辑</Button>
            </FormItem>
            <FormItem :style="{display: isEdit?'':'none'}">
              <Button
                style="float: right; margin-left: 10px"
                type="primary"
                @click="isEdit=false"
              >Submit</Button>
              <Button style="float: right;">Cancel</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </Content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["个人信息", "我的任务", "兑换清单"],
      formItem: {},
      isEdit: false
    };
  }
};
</script>



<style scoped>
.input {
  border: solid 1px #ddd;
  padding: 0 8px;
  border-radius: 5px;
}
.input:disabled {
  border: solid 1px #fff;
  background-color: #fff;
}
.info {
  padding: 0 100px;
  display: flex;
}
.form {
  margin-left: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.name {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  line-height: 1.5;
  color: #515a6e;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: inline-block;
  font-weight: 700;
  font-size: 30px;
  vertical-align: middle;
}
.avatar {
  width: 215px;
  height: 215px;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar img {
  width: 200px;
  height: 200px;
}
.cover {
  background: #000;
  height: 300px;
  overflow: hidden;
}

.cover img {
  width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
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
  /* padding: 40px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
</style>