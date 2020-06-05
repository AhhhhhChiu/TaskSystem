<template>
  <div class="animated fadeIn">
    <h2 style="margin-bottom: 30px">注册</h2>
    <Form
      ref="RegisterForm"
      :model="RegisterForm"
      class="form-class"
      @keydown.enter.native="register(RegisterForm)"
    >
      <FormItem prop="userName">
        <span>账号</span>
        <input v-model="RegisterForm['user.accountName']" type="text" class="input" maxlength="11" />
      </FormItem>
      <FormItem prop="password">
        <span>密码</span>
        <input v-model="RegisterForm['user.password']" type="password" class="input" maxlength="18" />
      </FormItem>
      <FormItem prop="confirmPwd">
        <span>确认密码</span>
        <input v-model="confirmPwd" type="password" class="input" maxlength="18" />
      </FormItem>
      <FormItem>
        <Button
          style="margin-top: 25px; background: #5A8CFF; border:#5A8CFF"
          type="primary"
          @click.native.prevent="register(RegisterForm)"
          long
          :loading="registerLoading"
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
import { register } from "@/api/apis";
export default {
  data() {
    return {
      RegisterForm: {
        "user.userName": this.random_No(),
        "user.accountName": "",
        "user.password": "",
        "user.roleId": 2,
        "user.address": "校内"
      },
      confirmPwd: "",
      registerLoading: false
    };
  },
  methods: {
    register(RegisterForm) {
      if (
        !RegisterForm["user.accountName"] ||
        !RegisterForm["user.password"] ||
        !this.confirmPwd
      ) {
        this.$Message.error("所有空都要填！");
        return;
      }
      if (RegisterForm["user.password"] !== this.confirmPwd) {
        this.$Message.error("两次密码输入不一致");
        return;
      }
      this.registerLoading = true;
      register(RegisterForm).then(res => {
        console.log(res);
        this.$Message.success("注册成功");
        this.registerLoading = false;
        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 0);
      });
    },
    random_No(j) {
      var random_no = "";
      for (var i = 0; i < j; i++) {
        random_no += Math.floor(Math.random() * 10);
      }
      random_no = new Date().getTime() + random_no;
      return "用户" + random_no;
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
}

.loginTips {
  display: flex;
  justify-content: center;
}
</style>