<template>
  <div class="container my-shadow box">
    <h2>发布任务</h2>
    <Form
      class="form"
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="80"
    >
      <FormItem label="标题" prop="title">
        <Input v-model="formValidate.title" placeholder="输入标题"></Input>
      </FormItem>
      <FormItem label="任务分类" prop="type_id">
        <Select v-model="formValidate.type_id" placeholder="选择任务分类">
          <Option value="0">软件外包</Option>
          <Option value="1">跑腿代取</Option>
          <Option value="2">视频剪辑</Option>
          <Option value="3">食堂兼职</Option>
          <Option value="4">办公助理</Option>
          <Option value="5">澳门代购</Option>
        </Select>
      </FormItem>
      <FormItem label="任务人数" prop="number">
        <Input v-model="formValidate.number" placeholder="输入任务人数" type="number"></Input>
      </FormItem>
      <FormItem label="有效期">
        <Row>
          <Col span="11">
            <FormItem prop="start_time">
              <DatePicker v-model="formValidate.start_time" type="date" placeholder="选择开始日期"></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="end_time">
              <DatePicker v-model="formValidate.end_time" type="date" placeholder="选择结束日期"></DatePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="任务积分" prop="integral">
        <Input v-model="formValidate.integral" placeholder="输入任务积分" type="number"></Input>
      </FormItem>
      <FormItem label="手机号" prop="phone">
        <Input v-model="formValidate.phone" placeholder="输入手机号" type="number"></Input>
      </FormItem>
      <FormItem label="任务内容" prop="content">
        <Input
          v-model="formValidate.content"
          type="textarea"
          :autosize="{minRows: 5,maxRows: 5}"
          placeholder="输入任务详细内容"
        ></Input>
      </FormItem>
      <FormItem style="display: flex; justify-content: flex-end">
        <Button type="primary" @click="handleSubmit('formValidate')" :loading="loading">发布</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
  
<script>
import { createTask } from "@/api/apis";
export default {
  data() {
    return {
      loading: false,
      formValidate: {
        // title:"",
        type_id: "",
        title: "",
        content: "",
        // "area": "",
        img: "",
        integral: "",
        number: "",
        status: false,
        phone: null,
        start_time: "",
        end_time: ""
      },
      ruleValidate: {
        title: [
          {
            required: true,
            message: "标题不能为空",
            trigger: "blur"
          }
        ],
        type_id: [
          {
            required: true,
            message: "选择一个任务种类",
            trigger: "blur"
          }
        ],
        number: [
          {
            required: true,
            message: "任务人数不能为空",
            trigger: "blur"
          },
          {
            type: "number",
            transform(value) {
              return Number(value);
            },
            min: 1,
            message: "任务人数不能小于1",
            trigger: "blur"
          }
        ],
        // start_time: [
        //   {
        //     required: true,
        //     message: "开始日期不能为空",
        //     trigger: "blur"
        //   }
        // ],
        // end_time: [
        //   {
        //     required: true,
        //     message: "结束日期不能为空",
        //     trigger: "blur"
        //   }
        // ],
        integral: [
          {
            required: true,
            message: "积分不能为空",
            trigger: "blur"
          },
          {
            type: "number",
            transform(value) {
              return Number(value);
            },
            min: 1,
            message: "积分不能小于1",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          },
          {
            type: "number",
            transform(value) {
              return Number(value);
            },
            min: 10000000000,
            message: "手机号格式错误",
            trigger: "blur"
          },
          {
            type: "number",
            transform(value) {
              return Number(value);
            },
            max: 99999999999,
            message: "手机号格式错误",
            trigger: "blur"
          }
        ],
        content: [
          {
            required: true,
            message: "任务要描述清楚哦",
            trigger: "blur"
          },
          {
            type: "string",
            min: 10,
            message: "描述不能少于10个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (this.formValidate.start_time > this.formValidate.end_time) {
          this.$Message.error("任务过期时间不能早于开始时间！");
          return;
        }
        const now = new Date();
        if (
          this.formValidate.start_time < now &&
          this.formValidate.end_time < now
        ) {
          this.$Message.error("任务有效期失效！");
          return;
        }
        if (valid) {
          this.loading = true;
          console.log(this.formValidate);
          let item = {};
          for (const key in this.formValidate) {
            if (this.formValidate.hasOwnProperty(key)) {
              item["task." + key] = this.formValidate[key];
            }
          }
          createTask(item).then(res => {
            console.log(res);
            if (res.data.code === 200) {
              this.$Message.success("已发布");
              console.log(res);
            } else {
              this.$Message.error("积分不足");
            }
            this.loading = false;
          });
        } else {
          this.$Message.error("表单没有填写完整");
          this.loading = false;
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style scoped>
.box {
  background: white;
  min-height: 100vh;
  padding: 50px;
}
.form {
  width: 700px;
  margin: 0 auto;
  margin-top: 40px;
}
</style>