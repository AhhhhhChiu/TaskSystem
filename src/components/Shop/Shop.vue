<template>
  <div class="container main">
    <!-- <Content class="left my-shadow" padding="0">
      <nav>
        <ul>
          <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
      </nav>
    </Content>-->
    <Content class="right">
      <!-- 商城的内容写在这里就可以 -->
      <vueWaterfallEasy id="fall" :imgsArr="list" srcKey="img" maxCols="4">
        <div class="img-info" slot-scope="props">
          <div
            style="color: #000; margin-bottom: 8px; display: flex; justify-content: space-between"
          >
            <div style="font-weight: bolder; font-size: 1.1rem; color: #666">{{props.value.name}}</div>
            <span>积分：{{props.value.integral}}</span>
          </div>
          <div style="color: #666; margin-bottom: 10px;">{{props.value.description}}</div>
          <Button @click="getGift(props.value.id)">兑换礼品</Button>
          <!-- <p class="some-info">第{{props.index+1}}张图片</p>
          <p class="some-info">{{props.value.name}}</p>-->
        </div>
      </vueWaterfallEasy>
      <!-- <Loader :loading="loading" /> -->
    </Content>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import Loader from "@/components/Components/Loader";
import { getGifts } from "@/api/apis";
export default {
  data() {
    return {
      list: [],
      currentPage: 1,
      pageSize: 10,
      loading: false
    };
  },
  created() {
    this.getData({
      currentPage: this.currentPage,
      pageSize: this.pageSize
    });
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData(info) {
      this.loading = true;
      getGifts(info).then(res => {
        this.list = res.data.data.data;
        console.log(this.list);
        this.loading = false;
      });
    },
    getGift(id) {
      alert(id);
    }
  }
};
</script>

<style scoped>
.img-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
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
  /* width: 100%; */
  /* overflow: scroll; */
  min-height: 100vh;
  background-color: #fff;
  padding: 40px;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
}
.vue-waterfall-easy-scroll::-webkit-scrollbar {
  display: none;
}
</style>