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
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
}
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
          <Menu
            style="border:none"
            mode="horizontal"
            :active-name="activeNname"
            @on-select="toPage"
          >
            <MenuItem style="border:none" name="任务中心">
              <Icon type="md-planet" />任务中心
            </MenuItem>
            <MenuItem style="border:none" name="任务查询">
              <Icon type="md-search" />任务查询
            </MenuItem>
            <MenuItem style="border:none" name="积分商城">
              <Icon type="md-cart" />积分商城
            </MenuItem>
            <!-- <MenuItem style="border:none" name="个人中心">
              <Icon type="md-person" />个人中心
            </MenuItem>-->
            <Submenu style="border:none" name="998">
              <template slot="title">
                <Icon type="ios-stats" />个人中心
              </template>
              <MenuItem name="我的主页">我的主页</MenuItem>
              <MenuItem name="已兑清单">已兑清单</MenuItem>
              <MenuItem name="已接收任务">已接收任务</MenuItem>
              <MenuItem style="color: red" name="退出登录">退出登录</MenuItem>
            </Submenu>
            <Submenu v-if="roleId==1" style="border:none" name="999">
              <template slot="title">
                <Icon type="ios-stats" />管理员
              </template>
              <MenuItem name="发布任务">发布任务</MenuItem>
              <MenuItem name="商城管理">商城管理</MenuItem>
              <MenuItem name="已发布任务">已发布任务</MenuItem>
            </Submenu>
          </Menu>
        </nav>
      </header>
      <Layout :style="{padding: '0 50px', width: '100%', marginTop: '60px'}">
        <div class="container">
          <Breadcrumb :style="{ margin: '16px 0' }">
            <BreadcrumbItem v-for="item in breadcrumb" :key="item">{{item}}</BreadcrumbItem>
          </Breadcrumb>
          <router-view />
        </div>
      </Layout>
      <Footer class="layout-footer-center">综合实训 &copy; 任务发布系统</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {
        任务中心: "home",
        任务查询: "search",
        积分商城: "shop",
        我的主页: "user",
        发布任务: "post",
        商城管理: "shopmanager",
        已接收任务: "myTasks",
        已兑清单: "exchanged",
        已发布任务: "postTasks"
      },
      breadcrumb: [],
      activeNname: ""
    };
  },
  mounted() {
    this.roleId = this.$store.state.roleId;
    console.log(this.$store);
    const last = this.$route.meta.breadcrumb.length - 1;
    this.activeNname = this.$route.meta.breadcrumb[last];
    this.changePath();
  },
  watch: {
    $route: "changePath"
  },
  methods: {
    // 路由变化
    changePath() {
      this.breadcrumb = this.$route.meta.breadcrumb;
    },
    // 点击导航
    toPage(name) {
      if (name === "退出登录") {
        if (confirm("确认退出登录吗")) {
          this.$store.commit("clearToken");
          this.$router.push({ name: "login" });
        }
      }
      this.$router.push({
        name: this.list[name]
      });
    }
  }
};
</script>
