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
      <FormItem label="标题" prop="name">
        <Input v-model="formValidate.name" placeholder="输入标题"></Input>
      </FormItem>
      <FormItem label="任务分类" prop="city">
        <Select v-model="formValidate.city" placeholder="选择任务分类">
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
            <FormItem prop="date">
              <DatePicker type="date" placeholder="选择开始日期" v-model="formValidate.start"></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="time">
              <DatePicker type="date" placeholder="选择结束日期" v-model="formValidate.end"></DatePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="任务积分" prop="score">
        <Input v-model="formValidate.score" placeholder="输入任务积分" type="number"></Input>
      </FormItem>
      <FormItem label="手机号" prop="phone">
        <Input v-model="formValidate.phone" placeholder="输入手机号" type="number"></Input>
      </FormItem>
      <FormItem label="任务内容" prop="desc">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{minRows: 5,maxRows: 5}"
          placeholder="输入任务详细内容"
        ></Input>
      </FormItem>
      <FormItem style="display: flex; justify-content: flex-end">
        <Button type="primary" @click="handleSubmit('formValidate')">发布</Button>
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
      // task.type_id[int]是	任务的分类
      // task.title[string]是	标题
      // task.content[string]是	任务内容
      // task.area[string]是	任务地区
      // task.integral[int]是	任务积分
      // task.img[string]是	任务图片
      // task.number[int]是	任务人数
      // task.status[boolean]是	任务状态
      // task.start_time[datetime]是	任务开始时间
      // task.end_time[datetime]是	任务结束时间
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change"
          }
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
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