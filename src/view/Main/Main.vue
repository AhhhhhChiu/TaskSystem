<style scoped>
.layout {
  margin: 0;
  padding: 0;
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-logo {
  font-weight: bold;
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 18px;
  /* color: #3eaf7c; */
}
.layout-footer-center {
  text-align: center;
}
nav {
  display: flex;
  align-items: center;
}
header {
  background: #fff;
  padding: 0;
  border: none;
  height: 57px;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
}
/* ul {
  height: 57px;
  display: flex;
  flex-direction: row;
}
li {
  height: 100%;
  cursor: pointer;
  margin-left: 25px;
  display: flex;
  border-bottom: solid 2px #fff;
  align-items: center;
}
li:hover,
li:active {
  color: #3eaf7c;
  border-bottom: solid 2px #3eaf7c;
} */
</style>
<style>
li {
  list-style: none;
}
.container {
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
}
.main {
  display: flex;
  justify-content: center;
}
.my-shadow {
  /* 水平 垂直 模糊距离 尺寸 */
  box-shadow: 0px 0px 5px 5px #eee;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <header class="my-shadow">
        <nav class="container main">
          <div class="layout-logo">任务发布系统</div>
          <Menu style="border:none" mode="horizontal" active-name="1" @on-select="toPage">
            <MenuItem style="border:none" name="0">
              <Icon type="md-planet" />任务中心
            </MenuItem>
            <MenuItem style="border:none" name="1">
              <Icon type="md-search" />任务查询
            </MenuItem>
            <MenuItem style="border:none" name="2">
              <Icon type="md-cart" />积分商城
            </MenuItem>
            <MenuItem style="border:none" name="3">
              <Icon type="md-person" />个人中心
            </MenuItem>
            <Submenu style="border:none" name="999">
              <template slot="title">
                <Icon type="ios-stats" />超级管理员
              </template>
              <MenuItem name="4">发布任务</MenuItem>
              <MenuItem name="5">商城管理</MenuItem>
            </Submenu>
            <!-- <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats" />统计分析
              </template>
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </Submenu>-->
          </Menu>
        </nav>
      </header>
      <Layout :style="{padding: '0 50px', width: '100%', marginTop: '60px'}">
        <div class="container">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>主页</BreadcrumbItem>
            <BreadcrumbItem>个人中心</BreadcrumbItem>
          </Breadcrumb>
          <router-view />
        </div>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["home", "search", "shop", "user", "post", "shopmanager"]
    };
  },
  methods: {
    toPage(index) {
      this.$router.push({
        name: this.list[index]
      });
    }
  }
};
</script>
