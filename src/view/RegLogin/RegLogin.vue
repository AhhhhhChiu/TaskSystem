<template>
  <div class="login" :style="{backgroundImage: 'url(' + bg + ')'}">
    <div id="card" class="login-con">
      <div class="login-card">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: require("../../assets/6_11.jpg")
    };
  },
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
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.login-con {
  width: 410px;
  min-width: 410px;
  padding: 10px;
  background-color: #fff;
  border-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.8rem;
}

.login-card {
  border: none;
  flex: 1 1 auto;
  padding: 1.25rem;
}
</style>
