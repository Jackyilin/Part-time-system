<template>
  <div>
    <Row>
      <Col span="23">
        <h2>我的基本信息</h2>
      </Col>
      <Col span="1"><Button type="info" size="small">预览</Button></Col>
    </Row>
    <Row style="border: 1px solid #c3c3c3;padding: 10px;margin-bottom: 20px;">
      <Row style="margin-top: 10px;">
        <Col span='5'>
          <span>姓名：</span><Input style='width: 150px;' v-model="studentList.name" placeholder=""></Input>
        </Col>
        <Col span='6'>
          <span>学校：</span><Input style='width: 200px;' v-model="studentList.school" placeholder=""></Input>
        </Col>
        <Col span='6'>
          <span>学院：</span><Input style='width: 200px;' v-model="studentList.academy" placeholder=""></Input>
        </Col>
      </Row>
      <Row style="margin-top: 10px;">
        <Col span='5'>
          <span>电话：</span><Input style='width: 150px;' v-model="studentList.tell" placeholder=""></Input>
        </Col>
        <Col span='6'>
          <span>性别：</span><Input style='width: 50px;' v-model="studentList.sex" placeholder=""></Input>
        </Col>
      </Row>
    </Row>
    <Row>
      <p class="honor">兼职经历：</p>
      <Input v-model="studentList.partimer" type="textarea" :rows="4" placeholder="请输入..."></Input>
    </Row>
    <Row class="mar10">
      <p class="honor">获得荣誉：</p>
      <Input v-model="studentList.honor" type="textarea" :rows="4" placeholder="请输入..."></Input>
    </Row>
    <Row class="mar10">
      <p class="honor">实习经历</p>
      <Input v-model="studentList.shixi" type="textarea" :rows="4" placeholder="请输入..."></Input>
    </Row>
    <Row style="text-align: center;margin-top: 40px;">
      <Button type="success" @click="success">完成</Button>
    </Row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      // value1: '陈奕霖',
      // value2: '黑龙江大学',
      // value3: '数据科学与技术学院',
      // value4: '20154125',
      // value5: '1884589839',
      // value6: '男'
      studentList: {}
    }
  },
  mounted: function(){
    this.getInfo();
  },
  methods: {
    getInfo() {
      var stuid = this.getCookie('userid');
      axios.get('http://localhost:8889/users/stu',{
        params: {
          stuid: stuid
        }
      }).then((res) => {
          this.studentList = res.data.msg;
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
    },
    success(){
      var stuid = this.getCookie('userid');
      console.log(this.studentList);
      axios.post('http://localhost:8889/users/updatestu',this.studentList).then((res) => {
        if(res.data.status == '0'){
          this.$Message.info('修改成功');
        }
      })


    }
  }
}
</script>

<style>
  .mar10{
    margin-top: 20px;
  }
  .honor{
    font-size: 18px;
    font-weight: 900;
  }
</style>

