<template>
  <div class="login" :style="{backgroundImage: 'url(' + bg + ')'}">
    <div id="card" class="login-con">
      <div class="login-card">
        <h2 style="margin-bottom: 30px;text-align:center">任务发布系统</h2>
        <i-input style="margin-bottom: 20px;" v-model="username" placeholder="账号"></i-input>
        <i-input
          style="margin-bottom: 20px;"
          v-model="password"
          placeholder="密码"
          type="password"
          @on-enter="toHome"
        ></i-input>
        <div style="display: flex; align-items: center">
          <Button style=" width: 100%;" type="info" @click="toHome">登录</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { login, getUserPermission } from "@/api/apis";
// import md5 from "js-md5";
export default {
  data() {
    return {
      username: "",
      password: "",
      bg: require("../../assets/6_11.jpg")
    };
  },
  components: {},
  mounted() {
    // if (this.$store.state.token) {
    //   console.log(this.$store.state.token);
    //   this.$Message["info"]({
    //     background: true,
    //     content: "欢迎你，" + this.$store.state.name
    //   });
    //   this.$router.push({ path: "/Base" });
    // }
    const h = new Date().getHours();
    if (h >= 6 && h <= 11) {
      this.bg = require("../../assets/6_11.jpg");
    } else if (h >= 11 && h <= 18) {
      this.bg = require("../../assets/11_18.jpg");
    } else if (h >= 18 && h <= 21) {
      this.bg = require("../../assets/18_21.jpg");
    } else {
      this.bg = require("../../assets/21_6.jpg");
    }
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/home" });
    }
    // toHome() {
    //   if (!this.username || !this.password) {
    //     alert("账号和密码都需要填写完整！");
    //     return;
    //   }
    //   login({
    //     username: this.username,
    //     password: md5(this.password)
    //   }).then(res => {
    //     console.log("login success");
    //     console.log(res);
    //     if (res.data.error != 0) {
    //       alert(res.data.msg);
    //       return;
    //     } else {
    //       this.$store.commit("changeToken", res.data.token);
    //       this.$store.commit("setUsername", this.username);
    //       this.$store.commit("setName", res.data.name);
    //       getUserPermission({ username: this.username }).then(res => {
    //         // 把权限和token存进vuex
    //         this.$store.commit(
    //           "setPermission",
    //           JSON.stringify(res.data.permission)
    //         );
    //         this.$Message["info"]({
    //           background: true,
    //           content: "欢迎你，" + this.$store.state.name
    //         });
    //         this.$router.push({ path: "/Base" });
    //       });
    //     }
    //   });
    // }
  }
};
</script>

<style lang="css" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.login-con {
  width: 410px;
  min-width: 410px;
  padding: 10px;
  border-color: transparent;
  background-color: #fff;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 0.5rem;
}

.login-card {
  border: none;
  flex: 1 1 auto;
  padding: 1.25rem;
}
</style>
