<template>
  <div>
    <Row class="container" v-for="item in jobList"  :key="item.Objectid">
      <Row>
        <Col span="22">
        <h2>
          {{item.name}}
        </h2>
        </Col>
        <Col span="1">
          <div  class="reject"><Icon type="checkmark" />举报</div>
        </Col>
      </Row>
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
      <Row style="margin-top: 15px;" v-show="isShowDeliver">
        <Button type="primary" @click="likes(item._id, item.unitid)" style="margin-right: 40px;" :ref="item.Objectid">收藏</Button>
        <Button type="primary" @click="deliver($event, item._id, item.unitid)">一键投递</Button>
      </Row>
    </Row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
        project: '',
        grade: '',
        switch1: false,
        isActive: false,
        isShowDeliver: true,
        jobList: [
          // {
          //   name: "初中辅导老师",
          //   content: "辅导学生作业",
          //   request: "本科大学生",
          //   addr: "南岗区学府路74号",
          //   time: "工作日晚上7-9点",
          //   salary: "80/小时",
          //   introduction: "专注改善教学模式",
          //   unitname:"飞翔教育",
          //   Objectid: '12345asg465464213132wf'
          // },
          // {
          //   name: "初中辅导老师",
          //   content: "辅导学生作业",
          //   request: "本科大学生",
          //   addr: "南岗区学府路74号",
          //   time: "工作日晚上7-9点",
          //   salary: "80/小时",
          //   introduction: "专注改善教学模式",
          //   unitname:"飞翔教育",
          //   Objectid: '12345asg465464217832wf'
          // },
          // {
          //   name: "初中辅导老师",
          //   content: "辅导学生作业",
          //   request: "本科大学生",
          //   addr: "南岗区学府路74号",
          //   time: "工作日晚上7-9点",
          //   salary: "80/小时",
          //   introduction: "专注改善教学模式",
          //   unitname:"飞翔教育",
          //   Objectid: '12345asg465464893132wf'
          // }
        ]
      }
    },
    mounted: function() {
      this.test();
      this.isParter();
    },
    methods: {
      test() {
        console.log(333);
        var that = this;
        axios.get("http://localhost:8889/jobs").then(function(res){
          if(res.data.status == '0'){
            console.log(res);
            that.jobList = res.data.result;
            console.log(that.jobList);
          }
        }).catch(function (error) {
          console.log(error);
        })
      },
      deliver(event, jobid, unitid) {
        var stuid = this.getCookie('userid');
        var funEvent = event;
        console.log(funEvent);
        axios.post('http://localhost:8889/jobs/delivered', {
          jobid: jobid,
          unitid: unitid,
          stuid: stuid
        }).then((res) => {
          console.log(res);
          console.log(funEvent);
          if(res.data.status == '0'){
            console.log(funEvent.currentTarget);
            funEvent.target.className += 'acitve';
            this.$Message.info('投递成功');
          }else{
            this.$Message.info('投递失败');
            this.$Message.info(res.data.msg);
          }
        }).catch((err) => {
          console.log(err);
        })

      },
      likes(Objectid) {
        this.$Message.info(this.$refs.Objectid);
        // this.isActive = true;
      },
      isParter(){
        var arr, reg = new RegExp("(^| )" + 'token' + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)){
            if(unescape(arr[2]) == 'yurui'){
              console.log(unescape(arr[2]));
              this.isShowDeliver = false;
            }
        }else
            return null;
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
    position: relative;
  }
  /* .reject{
    position: absolute;
    right: 0;
    top: 0;
  } */
  .big-text{
    font-size: 13px;
    margin-top: 8px;
    font-weight: 800;
  }
  .active{
    background-color: #c3c3c3;
    border-color: #c3c3c3;
  }
</style>


