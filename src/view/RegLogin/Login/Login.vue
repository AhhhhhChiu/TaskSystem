<template>
  <div id="id" class="animated fadeIn">
    <h2 style="margin-bottom: 30px;">任务发布系统</h2>
    <Form
      ref="LoginForm"
      :model="LoginForm"
      :rules="rule_LoginForm"
      class="form-class"
      @keydown.enter.native="login(LoginForm)"
    >
      <FormItem>
        <span>账号</span>
        <input v-model="LoginForm['user.accountName']" type="text" class="input" />
      </FormItem>
      <FormItem>
        <div style="display: flex; justify-content: space-between">
          <span>密码</span>
          <a>忘记密码?</a>
        </div>
        <input v-model="LoginForm['user.password']" type="password" class="input" />
      </FormItem>
      <Checkbox>
        <span class="rememberKey">记住密码</span>
      </Checkbox>
      <br />
      <br />
      <FormItem>
        <Button
          @click.native.prevent="login(LoginForm)"
          style="background: #5A8CFF; border:#5A8CFF"
          type="primary"
          :loading="loginLoading"
          long
        >登录</Button>
      </FormItem>
    </Form>
    <div class="registerTips">
      <div>还没有账号?</div>
      <a @click="toRegister" style="margin-left: 5px; color: #007bff">点击注册</a>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/apis";
export default {
  data() {
    return {
      LoginForm: {
        "user.accountName": "",
        "user.password": ""
      },
      loginLoading: false
    };
  },
  methods: {
    login(data) {
      if (!data["user.accountName"] || !data["user.password"]) {
        this.$Message.error("账号和密码都不能为空");
        return;
      }
      this.loginLoading = true;
      login(data).then(res => {
        console.log(res);
        this.$Message.success("登录成功");
        this.loginLoading = false;
        setTimeout(() => {
          this.$router.push({ name: "home" });
        }, 800);
      });
    },
    toRegister: function() {
      this.$router.push({ name: "register" });
    }
  }
};
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
  /* transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
}

.registerTips {
  display: flex;
  justify-content: center;
}

/* .input :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
} */
</style>