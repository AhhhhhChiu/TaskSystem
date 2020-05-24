<template>
  <div class="container main">
    <Content class="left my-shadow" padding="0">
      <nav>
        <ul>
          <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
      </nav>
    </Content>
    <Content class="right my-shadow">
      <!-- 下面这里就是列表 -->
      <Card
        v-for="i in (20)"
        :key="i"
        dis-hover
        style="height: fit-content; width: 700px; margin: 20px;"
      >
        <p slot="title">【软件外包】有没有人会做小程序的</p>
        <span href="#" slot="extra">2020/5/19</span>
        <p>需求是这样的：这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样这样这样那样这样</p>
      </Card>
      <!-- 上面这里就是列表 -->
    </Content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "软件外包",
        "跑腿代取",
        "视频剪辑",
        "食堂兼职",
        "办公助理",
        "澳门代购"
      ]
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