<template>
    <div class="register" :style="{backgroundImage:'url('+ bg +')'}">
        <div id="card" class="register-con">
            <div class="register-card">
            <h2 style="margin-bottom: 30px;text-align:center">任务发布系统用户注册</h2>
            <i-input style="margin-buttom:20px;" v-model="newUser" aria-placeholder="账号"></i-input>
            <i-input style="margin-butt:20px;" v-model="newPass" @on-enter="toHome" aria-plaom:2ceholder="密码"></i-input>
            <i-input style="margin-buttom:20px;" v-model="checkPass" aria-placeholder="确定密码"></i-input>
            <div style="display：flex; justify-content: flex-end; align-items: center">
                <Button style=" width: 100%;" type="info" @click="toHome">注册</Button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        newUser:"",
        newPass:"",
        checkPass:"",
        bg:require("../../assets/6_11.jpg")
    };
},
components:{},
mounted(){
},
methods:{
    toHome(){
        if (!this.newUser||!this.newPass||!this.checkPass) {
            alert("全部信息都需要填写完整！");  
        }
        if (this.newPass!== this.checkPass) {
            alert("两次输入密码不一致!");
        }
    }
}
}
</script>

<style lang="css" scoped>
.register{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
}
.register-con{
    min-width: 110px;
    padding: 40px;
    border-color: transparent;
    background-color: white;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
     flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: 0.5rem;
}
.register-card{
    border:none;
    flex:2 1 auto;
    padding: 1.25rem;
}


</style>