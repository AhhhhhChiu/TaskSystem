<template>
  <div class="animated fadeIn">
    <h2 style="margin-bottom: 30px">注册</h2>
    <Form
      ref="RegisterForm"
      :model="RegisterForm"
      :rules="rule_RegisterForm"
      class="form-class"
      @keydown.enter.native="register_submit('RegisterForm')"
    >
      <FormItem prop="userName">
        <span>账号</span>
        <input type="text" class="input" />
      </FormItem>
      <FormItem prop="password">
        <span>密码</span>
        <input type="password" class="input" />
      </FormItem>
      <FormItem prop="password">
        <span>确认密码</span>
        <input type="password" class="input" />
      </FormItem>
      <FormItem>
        <Button
          style="margin-top: 25px; background: #5A8CFF; border:#5A8CFF"
          type="primary"
          @click.native.prevent="register_submit('RegisterForm')"
          long
        >注册</Button>
      </FormItem>
    </Form>
    <div class="loginTips">
      已经拥有账号?
      <router-link style="margin-left: 5px;" to="login" class="reg">立即登录</router-link>
    </div>
  </div>
</template>

<script>
// import Format from "@/assets/js/Format.js";
// import { mapMutations, mapActions } from "vuex";
export default {};
</script>
<style scoped>
.input {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 2px solid #ced4da;
  border-radius: 0.25rem;
}

.loginTips {
  display: flex;
  justify-content: center;
}
</style>