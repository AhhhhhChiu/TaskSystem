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
      <vueWaterfallEasy
        id="fall"
        :imgsArr="list"
        srcKey="img"
        maxCols="4"
        @scrollReachBottom="getData"
      >
        <div class="img-info" slot-scope="props">
          <div
            style="color: #000; margin-bottom: 8px; display: flex; justify-content: space-between"
          >
            <div style="font-weight: bolder; font-size: 1.1rem; color: #666">{{props.value.name}}</div>
            <span>积分：{{props.value.integral}}</span>
          </div>
          <div style="color: #666; margin-bottom: 10px;">{{props.value.description}}</div>
          <Button
            v-if="!isExchanged"
            @click="exchangeGift(props.value.id, props.index)"
            :loading="props.value.loading"
          >兑换礼品</Button>
        </div>
      </vueWaterfallEasy>
    </Content>
  </div>
</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import Loader from "@/components/Components/Loader";
import {
  getGifts,
  exchangeGift,
  getUserGifts,
  getGiftsWithoutDelete
} from "@/api/apis";
export default {
  data() {
    return {
      list: [],
      currentPage: 1,
      pageSize: 8,
      loading: false,
      isExchanged: false
    };
  },
  components: {
    vueWaterfallEasy
  },
  created() {
    this.changeRoute();
  },
  watch: {
    $route: "changeRoute"
  },
  methods: {
    changeRoute() {
      if (this.$route.meta.isExchanged) {
        this.isExchanged = true;
        this.list = [];
        this.currentPage = 1;
        this.pageSize = 8;
        setTimeout(() => {
          this.getData();
        }, 100);
      } else {
        this.isExchanged = false;
        this.list = [];
        this.currentPage = 1;
        this.pageSize = 8;
        setTimeout(() => {
          this.getData();
        }, 100);
      }
    },
    getData() {
      if (!this.isExchanged) {
        getGiftsWithoutDelete({
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(res => {
          let newList = res.data.data.data;
          newList = newList.map(elem => {
            elem.loading = false;
            return elem;
          });
          if (newList[newList.length - 1] != this.list[this.list.length - 1])
            this.list = this.list.concat(res.data.data.data);
          this.currentPage++;
        });
      } else {
        getUserGifts({
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(res => {
          let newList = res.data.data.data;
          newList = newList.map(elem => {
            elem.loading = false;
            return elem;
          });
          if (newList[newList.length - 1] != this.list[this.list.length - 1])
            this.list = this.list.concat(res.data.data.data);
          this.currentPage++;
        });
      }
    },
    exchangeGift(id, index) {
      this.list[index].loading = true;
      exchangeGift({
        "shop.id": id
      }).then(res => {
        console.log(res);
        this.list[index].loading = false;
        if (res.data.code === 200) {
          this.$Message.success("兑换成功");
        } else {
          this.$Message.error("积分不足");
        }
      });
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