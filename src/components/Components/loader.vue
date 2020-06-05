<template>
  <div class="loader" :style="{display: loading? '': 'none'}"></div>
</template>

<script>
export default {
  props: ["loading"]
};
</script>

<style scoped>
.loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #2e8e9a;
  width: 40px;
  height: 40px;
  margin-top: 40px;
  animation: load 2s linear infinite;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>