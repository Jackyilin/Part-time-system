<template>
  <div>
    <Row class="container" v-for="item in jobList">
      <h2>
        {{item.name}}
      </h2>
      <Row class="big-text">
        <Col span="2">
          <span>工作内容：</span>
        </Col>
        <Col span="20">
          {{item.context}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>任职要求：</span>
        </Col>
        <Col span="20">
          {{item.request}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>工作地点：</span>
        </Col>
        <Col span="20">
          {{item.addr}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>工作时间：</span>
        </Col>
        <Col span="20">
          {{item.time}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span>薪酬：</span>
        </Col>
        <Col span="20">
          {{item.salary}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          招聘单位：
        </Col>
        <Col span="22">
          {{item.unit}}
        </Col>
      </Row>
      <Row class="big-text">
        <Col span="2">
          <span class="unit">单位简介：</span>
        </Col>
        <Col span="22">
          {{item.unitintroduce}}
        </Col>
      </Row>
    </Row>
  </div>
</template>
<script>
import axios from 'axios'
export default {
   data() {
      return {
        jobList: [
          {
            name: "高级数学老师",
            context: "高级数学老师",
            request: "硕士学历",
            addr: "南岗区学府路74号",
            time: "每周一、周四",
            salary: "80/小时",
            unitintroduce: "专注改善教学模式",
            unit:"飞翔教育"
          },
          {
            name: "初中辅导老师",
            context: "辅导学生作业",
            request: "本科大学生",
            addr: "南岗区学府路74号",
            time: "工作日晚上7-9点",
            salary: "80/小时",
            unitintroduce: "专注改善教学模式",
            unit:"飞翔教育"
          }
        ]
      }
    },
    created: function() {
      this.getMydeliver();
    },
    methods: {
      getMydeliver(){
        console.log(this);
        var that = this;
        var userid = this.getCookie('userid');
        console.log(typeof userid);
        axios.get('http://localhost:8889/users/mydeliver',{
          params: {
            stuid: userid
          }
        }).then((res) => {
          console.log(that.jobList);
          // that.jobList = res.data.msg;
          that.jobList.push(res.data.msg);
          // this.$set(this.$data,this.jobList,res.data.msg);
          console.log(that.jobList);
        }).catch((err) => {
          console.log(err);
        })
      },

      getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
      }
    }
}

</script>

<style scoped>
  .container{
    border: 1px solid #c3c3c3;
    padding: 20px;
    margin-top: 8px;
  }
  .big-text{
    font-size: 13px;
    margin-top: 8px;
    font-weight: 800;
  }
  .unit{

  }
</style>


