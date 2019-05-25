<style lang="less">
  @import './register.less';
</style>

<template>
  <div class="register">
    <div class="register-con" v-show="isChoice">
      <div class="register-head">注册</div>
      <!-- <div class="parter">
        <div class="parter-left"><span class="unit">招聘单位</span></div>
        <div class="parter-right"><span class="student">学生兼职</span></div>
        <Radio-group v-model="parter">
          <Radio label="招聘单位"></Radio>
          <Radio label="学生兼职"></Radio>
        </Radio-group>
      </div> -->
      <div class="form-con">
        <!-- <login-form @on-success-valid="handleSubmit"></login-form> -->
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <Form-item label="姓名" prop="name">
              <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
          </Form-item>
          <Form-item label="学校" prop="school">
              <Input v-model="formValidate.school" placeholder="请输入学校名称"></Input>
          </Form-item>
          <Form-item label="学院" prop="academy">
              <Input v-model="formValidate.academy" placeholder="请输入学校名称"></Input>
          </Form-item>
          <Form-item label="电话号码" prop="tell">
              <Input v-model="formValidate.tell" placeholder="请输入电话号码"></Input>
          </Form-item>
          <Form-item label="身份证号" prop="id">
              <Input v-model="formValidate.id" placeholder="请输入身份证号码"></Input>
          </Form-item>
          <Form-item label="性别" prop="sex">
              <Radio-group v-model="formValidate.sex">
                  <Radio label="男">男</Radio>
                  <Radio label="女">女</Radio>
              </Radio-group>
          </Form-item>
          <Form-item label="密码" prop="pwd">
              <Input v-model="formValidate.pwd" placeholder="请输入密码"></Input>
          </Form-item>
          <Form-item style="text-align: center;">
              <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
              <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px;color:#515a6e;">重置</Button>
          </Form-item>
        </Form>
      </div>
    </div>
    <div class="choice-parter" v-show="isParter">
      <div class="register-head">选择角色</div>
      <div class="parter">
        <Radio-group v-model="parter">
          <Radio label="招聘单位"></Radio>
          <Radio label="学生兼职"></Radio>
        </Radio-group>
        <Button type="primary" class="sure" @click="choice">确定</Button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formValidate: {
          name: '',
          school: '',
          academy: '',
          tell: '',
          id: '',
          sex: '',
          pwd: ''
      },
      ruleValidate: {
          name: [
              { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          school: [
              { required: true, message: '学校不能为空', trigger: 'blur' }
          ],
          academy: [
            { required: true, message: '学院不能为空', trigger: 'blur' }
          ],
          tell: [
            { required: true, message: '学院不能为空', trigger: 'blur' }
          ],
          id: [
            { required: true, message: '身份证号码不能为空', trigger: 'blur' }
          ],
          sex: [
              { required: true, message: '请选择性别', trigger: 'change' }
          ],
          pwd: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
      },
      parter: "学生兼职",
      isChoice: false,
      isParter: true
    }
  },
  methods: {
    handleSubmit (name) {
      var that = this;
      this.$refs[name].validate((valid) => {
          if (valid) {
              console.log(that.formValidate);
              axios.post('http://localhost:8889/users/student',{
                academy: that.formValidate.academy,
                school: that.formValidate.school,
                name: that.formValidate.name,
                tell: that.formValidate.tell,
                id: that.formValidate.id,
                sex: that.formValidate.sex,
                pwd: that.formValidate.pwd
              }).then((res) => {
                console.log(res)
                this.$Message.success('提交成功!');
              }).catch((err) => {
                console.log(err);
              })
              // var params = {
              //   academy: that.formValidate.academy,
              //   school: that.formValidate.school,
              //   name: that.formValidate.name,
              //   tell: that.formValidate.tell,
              //   id: that.formValidate.id,
              //   sex: that.formValidate.sex
              // }
              // var instance = axios.create({
              //   baseURL: 'http://localhost:8889/users/',
              //   timeout: 1000,
              //   headers: {'Origin': 'http://localhost:8080'}
              // })
              // instance.post('/student', params).then((res) => {
              //   console.log(res)
              //   this.$Message.success('提交成功!');
              // }).catch((err) => {
              //   console.log(err);
              // })
              //   method: 'post',
              //   url: 'http://127.0.0.1:8889/users/student',
              //   data: {
              //     academy: that.formValidate.academy,
              //     school: that.formValidate.school,
              //     name: that.formValidate.name,
              //     tell: that.formValidate.tell,
              //     id: that.formValidate.id,
              //     sex: that.formValidate.sex
              //   },
              //   hearders: {Origin:"http://localhost:8080"}
              // }).then((res) => {
              //   console.log(res)
              //   this.$Message.success('提交成功!');
              // }).catch((err) => {
              //   console.log(err);
              // })
          } else {
              this.$Message.error('表单验证失败!');
          }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    choice(){
      this.isChoice = true;
      this.isParter = false;
    }
  }
}
</script>

