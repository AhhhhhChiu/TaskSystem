<template>
  <div class="container my-shadow box">
    <div class="input-group">
      <i-input class="input"></i-input>
      <Button shape="circle" icon="ios-search"></Button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  background: white;
  min-height: 100vh;
  padding: 50px;
  display: flex;
  justify-content: center;
}
.input-group {
  display: flex;
}
.input {
  width: 400px;
  margin-right: 15px;
}
</style>