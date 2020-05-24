<template>
  <div class="container main">
    <Content class="left my-shadow" padding="0">
      <nav>
        <ul>
          <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
      </nav>
    </Content>
    <Content class="right my-shadow">asdasdasd</Content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["个人信息", "我的任务", "兑换清单"]
    };
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