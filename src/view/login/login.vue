<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <span style="position: absolute;right: 20px;z-index: 900;line-height: 20px;font-size: 14px;
      color: #2d8cf0;
      font-weight: bold;
      top: 16px;">注册</span>
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="Submit"></login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    Submit ({ userName, password }) {
      var that = this;
      var studentname = arguments[0].userName;
      var studentpwd = arguments[0].password;
      console.log(11);
      axios.get('http://localhost:8889/users/denglu',{
        params: {
          name: studentname,
          pwd: studentpwd
        }
      }).then((res) => {
        console.log(444);
        console.log(res.data);
        if(res.data.status == '0'){
          if(res.data.msg.parter == 'student'){
            userName = "chenyilin";
            password = '123';
            console.log('pater:student');
          }else if(res.data.msg.parter == 'unit'){
            userName = 'yurui';
            password = '123';
            console.log('pater:unit');
          }
          var exp = new Date();
          exp.setTime(exp.getTime() + 60 * 60 * 1000);
          document.cookie = "userid" + "=" + escape(res.data.msg._id) + ";expires=" + exp.toGMTString() + ";path=/";
          this.handleLogin({ userName, password }).then(res => {
              this.getUserInfo().then(res => {
                this.$router.push({
                  name: this.$config.homeName
                })
              })
          })
        }else if(res.data.status == '1'){
          this.$Message.info('用户名或密码错误');
        }
      }).catch((err) => {
        console.log(err);
      })
      // this.handleLogin({ userName, password }).then(res => {
      //   this.getUserInfo().then(res => {
      //     this.$router.push({
      //       name: this.$config.homeName
      //     })
      //   })
      // })
    }
  }
}
</script>

<style>

</style>
